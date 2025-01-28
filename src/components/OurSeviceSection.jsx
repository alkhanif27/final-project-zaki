import SewaMobilPhoto from "../assets/SewaMobilPhoto.jpg";
import TourPackagePhoto from "../assets/TourPackagephoto.jpg";
import { Link } from "react-router";
import "aos/dist/aos.css";
import AOS from "aos";

export default function OurServiceSection() {
  AOS.init();
  return (
    <>
      <div
        className="container bg-gray-100"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      >
        <p className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl p-5">
          Our Service
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          <div className="flex flex-col bg-base-200 p-6 rounded-lg shadow-lg h-full">
            <img
              src={SewaMobilPhoto}
              alt="Rent Car"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
            />
            <Link
              to="/service"
              className="hover:opacity-50 mt-auto text-3xl lg:text-5xl font-bold text-center mb-4"
            >
              Rent Car
            </Link>
          </div>
          <div className="flex flex-col bg-base-200 p-6 rounded-lg shadow-lg h-full">
            <img
              src={TourPackagePhoto}
              alt="Tour Package"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
            />
            <Link
              to="/service"
              className=" hover:opacity-50 mt-auto text-3xl lg:text-5xl font-bold text-center mb-4"
            >
              Tour Package
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
