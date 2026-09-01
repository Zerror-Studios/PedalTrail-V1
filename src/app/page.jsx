import PasswordProtector from "@/components/common/PasswordProtector";
import BeyondTheCourt from "@/components/home/BeyondTheCourt";
import DetailSection from "@/components/home/DetailSection";
import Hero from "@/components/home/Hero";
import InfiniteMarqueeSection from "@/components/home/InfiniteMarqueeSection";
import InvitationForm from "@/components/home/InvitationForm";
import Lable from "@/components/home/Lable";
import PadelTrail from "@/components/home/PadelTrail";
import Win from "@/components/home/Win";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>

      <Hero />
      <InfiniteMarqueeSection />
      <PadelTrail />
      <BeyondTheCourt />
      <Win />
      <InvitationForm />
      {/* <Lable /> */}
      <DetailSection />

    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
