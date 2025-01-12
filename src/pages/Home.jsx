import AboutusSection from "../components/AboutusSection";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import RentcarSection from "../components/RentcarSection";
import TestimoniSection from "../components/TestimoniSection";

export default function Home() {
  return (
    <>
      <div>
        <Navbar  />
        <HeroSection />
        <AboutusSection />
        <Destination />
        <RentcarSection />
        <TestimoniSection />
        <Footer />
      </div>
    </>
  );
}
