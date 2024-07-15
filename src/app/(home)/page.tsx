import BottomHeroSection from "@/components/bottomHeroSection";
import HeroSection from "@/components/heroSection";
import ImageSection from "@/components/imageSection";
import IntegrationSection from "@/components/integrationSection";
import ProductSection from "@/components/productSection";
import ReviewSection from "@/components/reviewSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="">
        <HeroSection />
        <ProductSection />
        <ReviewSection />
        <IntegrationSection />

        <BottomHeroSection />

        <ImageSection />
      </div>
    </main>
  );
}
