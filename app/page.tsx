import Actions from "@/components/Actions";
import CTATransiction from "@/components/CTATransiction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatItCalculates from "@/components/WhatItCalculates";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen max-w-full overflow-hidden flex flex-col  min-h-screen bg-gray-100 font-inter items-center p-4">
      <Hero />
      <HowItWorks />
      <WhatItCalculates />
      <CTATransiction />
      <Actions />
      <Footer />
    </main>
  );
}
