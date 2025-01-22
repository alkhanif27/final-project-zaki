import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LogoNeza from "../assets/LogoNeza.png";
import clockicon from "../assets/clockicon.png";
import best_price_icon from "../assets/best_price_icon.png";
import talenticon from "../assets/talenticon.png";
import TestimoniPart from "../components/TestimoniPart";
import "aos/dist/aos.css";
import AOS from "aos";

export default function About() {
  AOS.init();
  return (
    <>
      <Navbar />
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
                packages in Yogyakarta, Java, and Bali. We have a wide range of
                vehicles to cater to your travel needs. Our goal is to provide
                unforgettable experiences for our customers through every tour
                package we offer. If you wish to customize your travel
                itinerary, we also offer custom tour packages. You can choose
                any destinations you want to visit while adjusting it to your
                travel budget. We are ready to serve you at any time and are
                happy to answer any questions to ensure you have a comfortable
                and tailored travel experience.
              </p>
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
      <section className="text-gray-700 body-font">
        <div className="flex justify-center mt-10 text-4xl font-regular">
          Why Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src={best_price_icon}
                    alt="Reasonable Rates"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Reasonable Rates
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src={clockicon}
                    alt="Time Efficiency"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Time Efficiency
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img src={talenticon} className="w-32 mb-3" />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Expertise in Industry
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimoniPart />
      <Footer />
    </>
  );
}
