import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import RentCar from "./pages/RentCar";
import TourPackage from "./pages/TourPackage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/rentcar" element={<RentCar />} />
        <Route path="/tourpackage" element={<TourPackage />} />
      </Routes>
    </BrowserRouter>
  );
}
