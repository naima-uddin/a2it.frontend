import PromotionNavbar from "@/components/shared/PromotionNavbar";
import PromotionFooter from "@/components/shared/PromotionFooter";
import Home from "@/components/promotion/Home/Home";

export default function Page() {
  return (
    <>
      <PromotionNavbar />
      <Home />
      <PromotionFooter />
    </>
  );
}
