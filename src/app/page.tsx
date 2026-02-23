"use client";

import landingData from "@/config/landing.json";
import { Header } from "@/components/blocks/Header";
import { Hero } from "@/components/blocks/Hero";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { InclusionCards } from "@/components/blocks/InclusionCards";
import { GenericRegistration } from "@/components/blocks/GenericRegistration";
import { AccordionFAQ } from "@/components/blocks/AccordionFAQ";
import { Footer } from "@/components/blocks/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header brandName={landingData.brand.name} />

      <div className="flex-1">
        {landingData.sections.map((section: any) => {
          switch (section.type) {
            case "hero":
              return (
                <Hero
                  key={section.id}
                  title={section.title}
                  subtitle={section.subtitle}
                  background={section.background}
                  eventInfo={section.eventInfo}
                  bonus={section.bonus}
                  primaryCTA={section.primaryCTA}
                  secondaryCTA={section.secondaryCTA}
                />
              );
            case "features":
              return (
                <FeatureGrid
                  key={section.id}
                  title={section.title}
                  subtitle={section.subtitle}
                  items={section.items}
                />
              );
            case "benefits":
              return (
                <BenefitsGrid
                  key={section.id}
                  title={section.title}
                  subtitle={section.subtitle}
                  items={section.items}
                  columns={section.columns}
                />
              );
            case "story":
              return (
                <section key={section.id} className="py-24 px-6 bg-slate-50 overflow-hidden relative">
                  <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-slate-900"
                    >
                      {section.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium"
                    >
                      {section.text}
                    </motion.p>
                  </div>
                  {section.glass && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/30 backdrop-blur-3xl -z-0" />
                  )}
                </section>
              );
            case "audience":
              return (
                <InclusionCards
                  key={section.id}
                  title={section.title}
                  items={section.items}
                />
              );
            case "registration_cta":
              return (
                <GenericRegistration
                  key={section.id}
                  title={section.title}
                  description={section.description}
                  ctaText={section.ctaText}
                  bonus={section.bonus}
                  eventDate={section.eventDate}
                  benefits={section.benefits}
                />
              );
            case "faq":
              return (
                <AccordionFAQ
                  key={section.id}
                  title={section.title}
                  subtitle={section.subtitle}
                  items={section.items}
                />
              );
            default:
              return null;
          }
        })}
      </div>

      <Footer text={landingData.footer.text} links={landingData.footer.links} />
    </main>
  );
}
