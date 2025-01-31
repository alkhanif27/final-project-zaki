import KawahDiengPict from "../assets/KawahDiengPict.jpg";
import OneDayDiengPict from "../assets/OneDayDiengPict.jpg";
import TwoDayDiengPict from "../assets/TwoDayDiengPict.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingButtonPackage from "../components/BookingButtonPackage";
export default function TourPackageJogja() {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font container">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Explore the Enchanting Beauty of Dieng
            </h1>
            <p className="mb-8 leading-relaxed">
              Nestled high in the mountains of Central Java, Dieng Plateau is a
              magical destination with breathtaking landscapes and rich cultural
              heritage. Wake up to a dreamy golden sunrise at Sikunir Hill,
              where the sky glows with warm hues over misty valleys. Discover
              the Colorful Lake (Telaga Warna), a surreal lake that changes
              shades due to natural minerals. Explore the ancient Dieng Temples,
              remnants of Javas oldest Hindu civilization. For adventure
              seekers, the crater lakes and geothermal wonders add to the
              mystical charm. With cool weather, stunning views, and local
              traditions, Dieng is a must-visit paradise above the clouds.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="herotourpackagejogja"
              src={KawahDiengPict}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          <div className="flex flex-col bg-base-200 p-6 rounded-lg shadow-lg h-full">
            <img
              src={OneDayDiengPict}
              alt="one day trip"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
            />
            <p className="mt-auto text-black text-3xl lg:text-5xl font-bold text-center">
              One Day Trip
            </p>
            <p className="flex-grow p-4">
              Price : Rp 900.000 / pack
              <br /> Destinations : Bukit Sikunir, Telaga Warna, Kawah Dieng,
              Telaga Pengilon, Kompleks Candi Dieng (choose 3 destination){" "}
              <br />
              Facilities : Private car, driver, fuel, parking fee, mineral
              water, and entrance tickets
            </p>
            <div className="mt-5">
              <BookingButtonPackage
                packageName="One Day Trip"
                category="dieng"
              />
            </div>
          </div>
          <div className="flex flex-col bg-base-200 p-6 rounded-lg shadow-lg h-full">
            <img
              src={TwoDayDiengPict}
              alt="one day trip"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
            />
            <p className="mt-auto text-black text-3xl lg:text-5xl font-bold text-center">
              Two Day Trip
            </p>
            <p className="flex-grow p-4">
              Price : Rp 1.800.000 / pack
              <br /> Destinations : Bukit Sikunir, Telaga Warna, Kawah Dieng,
              Telaga Pengilon, Kompleks Candi Dieng <br />
              Facilities : Private car, driver, fuel, parking fee, mineral
              water, and entrance tickets
            </p>
            <div className="mt-5">
              <BookingButtonPackage
                packageName="Two Day Trip"
                category="dieng"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
