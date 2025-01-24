import InnovaPict from "../assets/InnovaPict.jpg";
import HiacePremioPict from "../assets/HiacePremioPict.jpg";
import BigBusPict from "../assets/BigBusPict.jpg";

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
          </div>
        </div>
        <p className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl p-5">
          TOUR PACKAGE
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
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
