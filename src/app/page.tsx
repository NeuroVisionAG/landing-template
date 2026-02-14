import landingData from "@/config/landing.json";
import { Header } from "@/components/blocks/Header";
import { Hero } from "@/components/blocks/Hero";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { AccordionFAQ } from "@/components/blocks/AccordionFAQ";
import { Footer } from "@/components/blocks/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header brandName={landingData.brand.name} />

      <div className="flex-1 mt-16">
        {landingData.sections.map((section: any) => {
          switch (section.type) {
            case "hero":
              return (
                <Hero
                  key={section.id}
                  title={section.title}
                  subtitle={section.subtitle}
                  cta={section.cta}
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
