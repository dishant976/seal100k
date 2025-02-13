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
    html: `<div 
      style="background: ${color}; 
             width: 20px; 
             height: 20px; 
             border-radius: 50%; 
             box-shadow: 0 0 10px ${color};">
      </div>`,
  });

// Heading in Nordic script that switches to English on hover
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
  // State to track the currently selected seal color for overlay
  const [mapColor, setMapColor] = useState<string>("transparent");

  return (
    <div className={styles.mapContainer}>
      {/* Black background heading at the top in Nordic/English toggle */}
      <NordicText />

      {/* Semi-transparent overlay that changes color based on the selected seal */}
      <div
        className={styles.mapOverlay}
        style={{ backgroundColor: mapColor }}
      ></div>

      <MapContainer center={[20, 10]} zoom={2} className={styles.map}>
        {/* Carto basemap with no labels */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors 
            &copy; <a href="https://carto.com/attributions">CARTO</a>'
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
                  // If your data has seal.color, use it. Otherwise default to a gold tint.
                  const colorOverlay = (seal as any).color
                    ? (seal as any).color
                    : "rgba(255, 215, 0, 0.3)";
                  setMapColor(colorOverlay);
                },
              }}
            >
              <Popup className={styles.sealPopup}>
                {/* Seal name in bold, underlined, centered */}
                <h2
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  {seal.name}
                </h2>

                {/* Origin */}
                <p>
                  <strong>Origin:</strong> {seal.origin}
                </p>

                {/* Location name (if present) */}
                {seal.locationName && (
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
                      width: "400px", // Increased size
                      height: "auto",
                      margin: "10px 0",
                      border: "2px solid gold",
                    }}
                  />
                )}

                {/* Full history text at once */}
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
