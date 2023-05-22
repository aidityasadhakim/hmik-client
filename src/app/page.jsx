"use client";

import HomeCarousel from "@/components/carousel/HomeCarousel";
import FooterComponent from "@/components/footer/FooterComponent";
import HomeContent from "@/components/home-content/HomeContent";
import HomeSection2 from "@/components/home-content/HomeSection2";
import Wave from "@/components/materials/Wave";

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      {/* <HomeContent /> */}
      {/* <Wave /> */}
      {/* <HomeSection2 /> */}
      <FooterComponent />
    </div>
  );
}
