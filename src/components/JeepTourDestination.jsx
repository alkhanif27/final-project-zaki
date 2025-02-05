import Footer from "./Footer";
import Navbar from "./Navbar";
import JeepTour from "../assets/JeepTour.jpg";

export default function JeepTourDestination() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Unleash Your Adventurous Spirit with a Jeep Tour
          </h1>
          <p className="mb-8 leading-relaxed">
            Brace yourself for an exhilarating off-road journey through rugged
            terrains, towering cliffs, and breathtaking landscapes. Feel the
            thrill as your jeep navigates steep hills, winding trails, and rocky
            paths, taking you deep into nature’s raw beauty. Experience the rush
            of wind as you explore hidden valleys, volcanic plains, and scenic
            viewpoints that offer stunning panoramic vistas. Whether conquering
            sandy dunes, crossing rivers, or witnessing a golden sunrise from a
            highland peak, a jeep tour promises an unforgettable
            adventure—perfect for those who crave excitement and exploration
            beyond the ordinary.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="gambarpantai"
            src={JeepTour}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
