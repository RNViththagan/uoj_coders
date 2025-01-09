"use client";

import { AboutSection } from "@/components/about-section";
import { AwardsSection } from "@/components/awards-section";
import ContactSection from "@/components/contact-section";
import EliminationRound from "@/components/elimination-round";
import { EventDateTimeSection } from "@/components/event-date-time-section";
import Finalists from "@/components/finalists";
import { HeroSection } from "@/components/hero-section";
import RulesSection from "@/components/rules-section";
import SponsorsSection from "@/components/sponsors-section";
import { TimelineSection } from "@/components/timeline-section";
import { WinnersSection } from "@/components/winners-section";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  setTheme("dark");

  return (
    <div>
      <HeroSection />
      <EventDateTimeSection />
      <AboutSection />
      <TimelineSection />
      <AwardsSection />
      <RulesSection />
      <SponsorsSection />
      <EliminationRound />
      <Finalists />
      <WinnersSection />
      <ContactSection />
    </div>
  );
}
