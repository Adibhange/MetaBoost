import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Plan from "@/components/Plan";
import Faqs from "@/components/Faqs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="dotted-background"></div>
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <Plan />
        <CTA/>
        <Faqs/>
      </main>
      <Footer/>
    </>
  );
}
