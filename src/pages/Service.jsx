import InnovaPict from "../assets/InnovaPict.jpg";
import HiacePremioPict from "../assets/HiacePremioPict.jpg";
import BigBusPict from "../assets/BigBusPict.jpg";
import DiengPict from "../assets/DiengPict.jpg";
import YogyakartaPict from "../assets/YogyakartaPict.jpg";

import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Service() {
  return (
    <>
      <Navbar />
      <div className="container bg-gray-100">
        <p className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl p-5">
          RENT CAR
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          <div className="flex flex-col bg-gray-200 p-6 rounded-lg shadow-lg h-full">
            <div className="h-64 w-full overflow-hidden rounded-lg mb-6">
              <img
                src={InnovaPict}
                alt="Rent Car Reguler"
                className="w-full h-full object-cover"
              />
            </div>
            <Link
              to="/RentCarReguler"
              className="hover:opacity-50 mt-auto text-3xl lg:text-5xl font-bold text-center mb-4"
            >
              Reguler
            </Link>
            <p className="flex-grow">
              Looking for an affordable and comfortable ride? Our Regular
              Service offers well-maintained vehicles with professional drivers,
              ensuring a smooth and hassle-free journey. Perfect for daily
              commutes, airport transfers, or weekend trips, we provide a safe,
              clean, and reliable transportation experience at the best price.
            </p>
          </div>
          <div className="flex flex-col bg-gray-200 p-6 rounded-lg shadow-lg h-full">
            <div className="h-64 w-full overflow-hidden rounded-lg mb-6">
              <img
                src={HiacePremioPict}
                alt="Rent Car VIP"
                className="w-full h-full object-cover"
              />
            </div>
            <Link
              to="/RentCarVip"
              className="hover:opacity-50 mt-auto text-3xl lg:text-5xl font-bold text-center mb-4"
            >
              VIP
            </Link>
            <p className="flex-grow">
              Enjoy luxury and exclusivity with our VIP Service. Travel in style
              with premium vehicles, top-class features, and professional
              chauffeurs ready to serve you. Whether for business, special
              events, or personal comfort, we ensure an elegant, smooth, and
              sophisticated ride tailored to your needs.
            </p>
          </div>
          <div className="flex flex-col bg-gray-200 p-6 rounded-lg shadow-lg h-full">
            <div className="h-64 w-full overflow-hidden rounded-lg mb-6">
              <img
                src={BigBusPict}
                alt="Rent Car Bus"
                className="w-full h-full object-cover"
              />
            </div>
            <Link
              to="/RentCarBus"
              className="hover:opacity-50 mt-auto text-3xl lg:text-5xl font-bold text-center mb-4"
            >
              Bus
            </Link>
            <p className="flex-grow">
              Need transport for a large group? Our Big Bus Service is perfect
              for corporate events, school trips, or family vacations. With
              spacious seating, modern amenities, and skilled drivers, we
              guarantee a safe, convenient, and enjoyable journey for everyone
              aboard.
            </p>
          </div>
        </div>
        <p className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl p-5">
          TOUR PACKAGE
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          <div className="flex flex-col bg-gray-200 p-6 rounded-lg shadow-lg h-full">
            <div className="h-64 w-full overflow-hidden rounded-lg mb-6">
              <img
                src={YogyakartaPict}
                alt="YogyakartaPict"
                className="w-full h-full object-cover"
              />
            </div>
            <Link
              to="/RentCarReguler"
              className="hover:opacity-50 mt-auto text-3xl lg:text-5xl font-bold text-center mb-4"
            >
              Yogyakarta
            </Link>
          </div>
          <div className="flex flex-col bg-gray-200 p-6 rounded-lg shadow-lg h-full">
            <div className="h-64 w-full overflow-hidden rounded-lg mb-6">
              <img
                src={DiengPict}
                alt="DiengPict"
                className="w-full h-full object-cover"
              />
            </div>
            <Link
              to="/RentCarVip"
              className="hover:opacity-50 mt-auto text-3xl lg:text-5xl font-bold text-center mb-4"
            >
              Dieng Plateau
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
