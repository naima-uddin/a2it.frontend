import HeroBanner from '@/components/HeroBanner';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <main className="bg-black">
      <HeroBanner />
      <ServicesSection />
      <PricingSection />
      <StatsSection />
    </main>
  );
}
