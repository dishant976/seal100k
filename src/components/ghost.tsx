'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Ghost() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = Array.from({ length: 8 }, (_, i) => `/images/ghost${i + 1}.jpg`);

  return (
    <section className="bg-black/50 backdrop-blur-sm py-8 text-center">
      <div className="container mx-auto px-8">
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-3xl font-bold text-white animate-pulse border-2 border-white rounded-lg p-2 inline-block shadow-lg">
            Sneak Peek - <span className="text-gray-300 animate-flicker">On Chain Ghosts</span>
          </h2>
          <a href="https://x.com/ghosts_btc" target="_blank" rel="noopener noreferrer">
            <img src="/images/x.jpg" alt="X Logo" className="w-10 h-10 ml-4 animate-pulse cursor-pointer" />
          </a>
        </div>

        <video className="w-full h-auto rounded-lg" autoPlay loop muted controls>
          <source src="/images/ghost.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer border-4 border-red-700"
              onClick={() => setSelectedImage(image)}
              initial={{ opacity: 0, filter: "blur(8px)", scale: 0.9 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <img
                src={image}
                alt={`Ghost ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={selectedImage}
              alt="Full scale view"
              className="max-w-full max-h-full rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
