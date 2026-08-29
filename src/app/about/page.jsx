import AmaraEditsSection from "@/components/about/AmaraEditsSection";
import EcosystemSection from "@/components/about/EcosystemSection";
import ExperienceSection from "@/components/about/ExperienceSection";
import FounderSection from "@/components/about/FounderSection";
import HeroSection from "@/components/about/HeroSection";
import PadelHeroPage from "@/components/about/PadelHeroPage";
import PartnersSection from "@/components/about/PartnersSection";
import TrailDetailsSection from "@/components/about/TrailDetailsSection";

import { createPageMetadata } from "@/lib/seo";

const AboutPage = () => {
  return (
    <>
     <PadelHeroPage />
     <FounderSection />
     <EcosystemSection />
     <TrailDetailsSection />
     <ExperienceSection />
     <AmaraEditsSection />
     <HeroSection />
     <PartnersSection />
    </>
  );
};

export default AboutPage;

export async function generateMetadata() {
  return createPageMetadata("/about");
}
