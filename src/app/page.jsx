"use client";

import HomeCarousel from "@/components/carousel/HomeCarousel";
import FooterComponent from "@/components/footer/FooterComponent";
import HomeContent from "@/components/home-content/HomeContent";
import HomeSection2 from "@/components/home-content/HomeSection2";
import Wave from "@/components/materials/Wave";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>This is HMIk</title>
      </Head>
      <HomeCarousel />
      <HomeContent />
      <Wave />
      <HomeSection2 />
      <FooterComponent />
    </div>
  );
}
