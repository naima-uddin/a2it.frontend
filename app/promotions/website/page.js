import PromotionNavbar from "@/components/shared/PromotionNavbar";
import PromotionFooter from "@/components/shared/PromotionFooter";
import Home from "@/components/promotion/Home/Home";
import PricingPage from "@/components/home-page-components/PricingCard";

export default function Page() {
  return (
    <>
      <PromotionNavbar />
      <Home />
      <PricingPage/>
      <PromotionFooter />
    </>
  );
}
