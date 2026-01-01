import CTATransiction from "@/components/CTATransiction";
import FormCalculator from "@/components/FormCalculator";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatItCalculates from "@/components/WhatItCalculates";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen bg-gray-100 font-inter items-center">
      <Hero />
      <HowItWorks />
      <WhatItCalculates />
      <CTATransiction />
      <FormCalculator />
    </main>
  );
}
