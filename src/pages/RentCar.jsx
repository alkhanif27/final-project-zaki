import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RentCarBus from "../components/RentCarBus";
import RentCarReguler from "../components/RentCarReguler";
import RentCarVip from "../components/RentCarVip";

export default function RentCar() {
  return (
    <>
      <Navbar />
      <RentCarVip />
      <RentCarBus />
      <RentCarReguler />

      <Footer />
    </>
  );
}
