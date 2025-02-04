import Header from '@/components/Header';
import OrdinalsInfo from '@/components/OrdinalsInfo';
import SealGrid from '@/components/SealGrid';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import Ghost from '@/components/ghost';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Header />
      <OrdinalsInfo />
      <Ghost />
      <SealGrid />
      <Timeline />
      <Footer />
    </main>
  );
}
