"use client";

import { useState } from "react";
import { sealsData } from "@/data/sealsData"; // Adjust the path as needed
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../styles/Map.module.css";
import L from "leaflet";

// Create a custom marker icon
const createIcon = (color: string) =>
  L.divIcon({
    className: "custom-pin",
    html: `<div style="background: ${color}; width: 20px; height: 20px; border-radius: 50%; box-shadow: 0 0 10px ${color};"></div>`,
  });

// Nordic text heading that toggles to English on hover
const NordicText = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <h1
      className={styles.nordicFont}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? "Seal of 100K" : "ᛋᛖᚨᛚ ᛟᚠ 100ᛜ"}
    </h1>
  );
};

const SealMap = () => {
  // State to track the current overlay color for the map
  const [mapColor, setMapColor] = useState<string>("transparent");

  return (
    <div className={styles.mapContainer}>
      {/* Nordic heading with a black background */}
      <NordicText />

      {/* Semi-transparent overlay that tints the map based on the selected seal */}
      <div className={styles.mapOverlay} style={{ backgroundColor: mapColor }}></div>

      <MapContainer center={[20, 10]} zoom={2} className={styles.map}>
        {/* Carto basemap with no labels */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {sealsData.map((seal) => {
          if (!seal.location) return null;

          return (
            <Marker
              key={seal.id}
              position={[seal.location.lat, seal.location.lng]}
              icon={createIcon("gold")}
              eventHandlers={{
                mouseover: (e) => {
                  e.target.getElement().classList.add("hover-glow");
                },
                mouseout: (e) => {
                  e.target.getElement().classList.remove("hover-glow");
                },
                click: () => {
                  // Use the seal's color property if available, or default to a gold tint.
                  const colorOverlay = (seal as any).color
                    ? (seal as any).color
                    : "rgba(255, 215, 0, 0.3)";
                  setMapColor(colorOverlay);
                },
              }}
            >
              <Popup className={styles.sealPopup} maxWidth={600} minWidth={400}>
                {/* Seal name in bold, underlined, centered */}
                <h2
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    fontSize: "1.5rem",
                  }}
                >
                  {seal.name}
                </h2>

                {/* Origin */}
                <p>
                  <strong>Origin:</strong> {seal.origin}
                </p>

                {/* Location name (using seal.locationname) */}
                {seal.locationname && (
                  <p>
                    <strong>Location:</strong> {seal.locationname}
                  </p>
                )}

                {/* Importance */}
                <p>
                  <strong>Importance:</strong> {seal.importance}
                </p>

                {/* Larger image */}
                {seal.image && (
                  <img
                    src={seal.image}
                    alt={seal.name}
                    style={{
                      display: "block",
                      width: "500px",
                      height: "auto",
                      margin: "10px 0",
                      border: "2px solid gold",
                    }}
                  />
                )}

                {/* Full history text */}
                {seal.history && <p>{seal.history}</p>}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default SealMap;
