import { AboutSection } from "@/components/about-section";
import { AwardsSection } from "@/components/awards-section";
import { HeroSection } from "@/components/hero-section";
import { TimelineSection } from "@/components/timeline-section";
import { UojImageSection } from "@/components/uoj-image-section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <UojImageSection />
      <AboutSection />
      <TimelineSection />
      <AwardsSection />
    </div>
  );
}
