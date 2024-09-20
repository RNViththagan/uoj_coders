"use client";

import { AboutSection } from "@/components/about-section";
import { AwardsSection } from "@/components/awards-section";
import ContactSection from "@/components/contact-section";
import { EventDateTimeSection } from "@/components/event-date-time-section";
import { HeroSection } from "@/components/hero-section";
import RulesSection from "@/components/rules-section";
import SponsorsSection from "@/components/sponsors-section";
import { TimelineSection } from "@/components/timeline-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EventDateTimeSection />
      <AboutSection />
      <TimelineSection />
      <AwardsSection />
      <RulesSection />
      <SponsorsSection />
      <ContactSection />
    </div>
  );
}
