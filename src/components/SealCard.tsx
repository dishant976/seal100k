'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Seal } from '@/data/sealsData';
import ImageModal from './ImageModal';

export default function SealCard({ seal }: { seal: Seal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Seal Card */}
      <div
        className="group relative overflow-hidden rounded-xl bg-neutral-900 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        onClick={() => setIsModalOpen(true)} // Open modal on click
      >
        {/* Seal Image */}
        <div className="aspect-square relative bg-neutral-800">
          <Image
            src={seal.image}
            alt={seal.name}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>

        {/* Seal Name */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold text-white">{seal.name}</h3>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageUrl={seal.image}
          title={seal.name}
          origin={seal.origin}
          history={seal.history}
          importance={seal.importance}
        />
      )}
    </>
  );
}
