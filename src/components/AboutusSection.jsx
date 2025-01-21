import LogoNeza from "../assets/LogoNeza.png";
import { Link } from "react-router";
import "aos/dist/aos.css";
import AOS from "aos";

export default function AboutusSection() {
  AOS.init();
  return (
    <section
      className="bg-gray-100"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="3000"
    >
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg text-balance">
              Neza Transport is a tour and transport company operating in
              Yogyakarta. Established since 2005, we continue to serve both
              domestic and international tourists, offering various tour
              packages in Yogyakarta, Java, and Bali.
            </p>
            <div className="mt-8">
              <Link
                to="/About"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us !
              </Link>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={LogoNeza}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
