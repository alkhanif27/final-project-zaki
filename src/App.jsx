import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import RentCarReguler from "./components/RentCarReguler";
import RentCarVip from "./components/RentCarVip";
import RentCarBus from "./components/RentCarBus";
import TourPackageJogja from "./pages/TourPackageJogja";
import TourPackageDieng from "./pages/TourPackageDieng";
import BeachDestination from "./components/BeachDestination";
import TempleDestination from "./components/TempleDestination";
import JeepTourDestination from "./components/JeepTourDestination";
import CaveTubingDestination from "./components/CaveTubingDEstination";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/rentcarreguler" element={<RentCarReguler />} />
        <Route path="/rentcarvip" element={<RentCarVip />} />
        <Route path="/rentcarbus" element={<RentCarBus />} />
        <Route path="/tourpackagejogja" element={<TourPackageJogja />} />
        <Route path="/tourpackagedieng" element={<TourPackageDieng />} />
        <Route path="/beachdestination" element={<BeachDestination />} />
        <Route path="/templedestination" element={<TempleDestination />} />
        <Route path="/jeeptourdestination" element={<JeepTourDestination />} />
        <Route path="/cavetubingdestination" element={<CaveTubingDestination />} />
      </Routes>
    </BrowserRouter>
  );
}
