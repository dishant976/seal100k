import Header from '@/components/Header';
import OrdinalsInfo from '@/components/OrdinalsInfo';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import Ghost from '@/components/ghost';
import dynamic from 'next/dynamic';

// Dynamically import SealMap to prevent SSR issues
const SealMap = dynamic(() => import('@/components/SealMap'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <OrdinalsInfo />
      <Ghost />
      {/* SealMap replaces SealGrid */}
      <SealMap />
      <Timeline />
      <Footer />
    </main>
  );
}
