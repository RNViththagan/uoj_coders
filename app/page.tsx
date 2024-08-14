import { AboutSection } from "@/components/about-section";
import { AwardsSection } from "@/components/awards-section";
import ContactSection from "@/components/contact-section";
import CopyrightSection from "@/components/copyright-section";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import RulesSection from "@/components/rules-section";
import SponsorsSection from "@/components/sponsors-section";
import { TimelineSection } from "@/components/timeline-section";
import { UojImageSection } from "@/components/uoj-image-section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <UojImageSection />
      <AboutSection />
      <TimelineSection />
      <AwardsSection />
      <RulesSection />
      <SponsorsSection />
      <ContactSection />
      <CopyrightSection />
    </div>
  );
}
