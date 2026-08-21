import Hero from "@/components/home/Hero";
import InfiniteMarqueeSection from "@/components/home/InfiniteMarqueeSection";
import PadelTrail from "@/components/home/PadelTrail";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
    <Hero />
    <InfiniteMarqueeSection />
    <PadelTrail />
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
