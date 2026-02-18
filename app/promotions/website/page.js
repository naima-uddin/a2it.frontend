import PromotionNavbar from "@/components/shared/PromotionNavbar";
import PromotionFooter from "@/components/shared/PromotionFooter";
import Home from "@/components/promotion/Home/Home";
import PricingPage from "@/components/home-page-components/PricingCard";
import PromotionPricing from "@/components/promotion/Home/PromotionPricing";
import ServicesSection from "@/components/promotion/ServicesSection";

export default function Page() {
  return (
    <>
      <PromotionNavbar />
      <Home />
      <PromotionPricing/>
      <ServicesSection/>
      <PromotionFooter />
    </>
  );
}
