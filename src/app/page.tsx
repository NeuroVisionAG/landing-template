import landingData from "@/config/landing.json";
import { Header } from "@/components/blocks/Header";
import { Hero } from "@/components/blocks/Hero";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { InclusionCards } from "@/components/blocks/InclusionCards";
import { GenericRegistration } from "@/components/blocks/GenericRegistration";
import { AccordionFAQ } from "@/components/blocks/AccordionFAQ";
import { Footer } from "@/components/blocks/Footer";

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
