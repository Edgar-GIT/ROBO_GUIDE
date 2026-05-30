import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BasicsSection from "@/components/BasicsSection";
import RoboHiveSection from "@/components/RoboHiveSection";
import UpgradesSection from "@/components/UpgradesSection";
import GuideSection from "@/components/GuideSection";
import TipsSection from "@/components/TipsSection";
import MobsSection from "@/components/MobsSection";
import DigitalBeeSection from "@/components/DigitalBeeSection";
import AmuletsSection from "@/components/AmuletsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <BasicsSection />
        <RoboHiveSection />
        <UpgradesSection />
        <GuideSection />
        <TipsSection />
        <MobsSection />
        <DigitalBeeSection />
        <AmuletsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
