import AboutusSection from "../components/AboutusSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import OurSeviceSection from "../components/OurSeviceSection";
import SectionDestination from "../components/SectionDestination";
import TestimoniSection from "../components/TestimoniSection";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <AboutusSection />
        <OurSeviceSection />
        <SectionDestination />
        <TestimoniSection />
        <Footer />
      </div>
    </>
  );
}
