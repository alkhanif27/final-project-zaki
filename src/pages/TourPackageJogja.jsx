import { useEffect } from "react";
import MalioboroPict from "../assets/MalioboroPict.jpg";
import OneDayJogjaPict from "../assets/OneDayJogjaPict.jpg";
import TwoDayJogjaPict from "../assets/TwoDayJogjaPict.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingButtonPackage from "../components/BookingButtonPackage";
export default function TourPackageJogja() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font container">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Discover the Beauty of Yogyakarta
            </h1>
            <p className="mb-8 leading-relaxed">
              Yogyakarta, the heart of Javanese culture, is a city full of charm
              and breathtaking landscapes. From the majestic Borobudur Temple, a
              UNESCO World Heritage Site, to the mystical Prambanan Temple,
              history and spirituality blend beautifully here. Nature lovers can
              explore the stunning Mount Merapi, the serene Tebing Breksi, or
              the magical Jomblang Cave with its heavenly light rays. For beach
              enthusiasts, Parangtritis Beach offers golden sands and
              mesmerizing sunsets. Whether youre seeking adventure, culture, or
              relaxation, Yogyakarta is a destination that promises
              unforgettable memories.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="herotourpackagejogja"
              src={MalioboroPict}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          <div className="flex flex-col bg-base-200 p-6 rounded-lg shadow-lg h-full">
            <img
              src={OneDayJogjaPict}
              alt="one day trip"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
            />
            <p className="mt-auto text-black text-3xl lg:text-5xl font-bold text-center">
              One Day Trip
            </p>
            <p className="flex-grow p-4">
              Price : Rp 400.000 / pack
              <br /> Destinations : Borobudur Temple, Prambanan Temple,
              Malioboro Street, Taman Sari Water Castle (choose 3 destination){" "}
              <br />
              Facilities : Private car, driver, fuel, parking fee, mineral
              water, and entrance tickets
            </p>
            <div className="mt-5">
              <BookingButtonPackage
                packageName="One Day Trip"
                category="jogja"
              />
            </div>
          </div>
          <div className="flex flex-col bg-base-200 p-6 rounded-lg shadow-lg h-full">
            <img
              src={TwoDayJogjaPict}
              alt="one day trip"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
            />
            <p className="mt-auto text-black text-3xl lg:text-5xl font-bold text-center">
              Two Day Trip
            </p>
            <p className="flex-grow p-4">
              Price : Rp 800.000 / pack
              <br /> Destinations : Borobudur Temple, Prambanan Temple,
              Malioboro Street, Taman Sari Water Castle <br />
              Facilities : Private car, driver, fuel, parking fee, mineral
              water, and entrance tickets
            </p>
            <div className="mt-5">
              <BookingButtonPackage
                packageName="Two Day Trip"
                category="jogja"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
