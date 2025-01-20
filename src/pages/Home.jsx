import AboutusSection from "../components/AboutusSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import OurSeviceSection from "../components/OurSeviceSection";
import SectionDestination from "../components/SectionDestination";
import TestimoniPart from "../components/TestimoniPart";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <AboutusSection />
        <OurSeviceSection />
        <SectionDestination />
        <TestimoniPart />
        <Footer />
      </div>
    </>
  );
}
