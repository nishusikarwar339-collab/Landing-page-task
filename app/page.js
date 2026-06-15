import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedCompanies from '@/components/TrustedCompanies';
import Features from '@/components/Features';
import PlatformSection from '@/components/PlatformSection';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import ClientOnly from '@/components/ClientOnly';

export default function Home() {
  return (
    <ClientOnly>
      <main className="min-h-screen bg-white pt-20">
        <Navbar />
        <Hero />
        <TrustedCompanies />
        <Features />
        <PlatformSection />
        <Testimonials />
        <Pricing />
        <Footer />
      </main>
    </ClientOnly>
  );
}
