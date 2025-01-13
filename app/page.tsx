"use client";

import { AboutSection } from "@/components/about-section";
import { AwardsSection } from "@/components/awards-section";
import ContactSection from "@/components/contact-section";
import EliminationRound from "@/components/elimination-round";
import { EventDateTimeSection } from "@/components/event-date-time-section";
import Finalists from "@/components/finalists";
import GallerySection from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import RulesSection from "@/components/rules-section";
import SponsorsSection from "@/components/sponsors-section";
import { TimelineSection } from "@/components/timeline-section";
import { WinnersSection } from "@/components/winners-section";
import { useTheme } from "next-themes";
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

export default function Home() {
  const { setTheme } = useTheme();
  setTheme("dark");

  // const router = useRouter();

  // useEffect(() => {
  //   const handleHashChange = (url) => {
  //     const hash = url.split('#')[1];
  //     if (hash) {
  //       const element = document.getElementById(hash);
  //       if (element) {
  //         element.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     }
  //   };

  //   router.events.on('hashChangeComplete', handleHashChange);
  //   return () => {
  //     router.events.off('hashChangeComplete', handleHashChange);
  //   };
  // }, [router.events]);

  return (
    <div>
      <HeroSection />
      <EventDateTimeSection />
      <AboutSection />
      <TimelineSection />
      <WinnersSection />
      <Finalists />
      <EliminationRound />
      <RulesSection />
      <GallerySection />
      {/* <AwardsSection /> */}
      <SponsorsSection />
      <ContactSection />
    </div>
  );
}
