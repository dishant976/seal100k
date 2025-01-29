'use client';

import { sealsData } from '@/data/sealsData';
import SealCard from './SealCard';

export default function SealGrid() {
  return (
    <section className="bg-neutral-950 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sealsData.map((seal) => (
            <SealCard key={seal.id} seal={seal} />
          ))}
        </div>
      </div>
    </section>
  );
}
