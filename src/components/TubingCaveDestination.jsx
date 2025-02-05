import Footer from "./Footer";
import Navbar from "./Navbar";
import CaveTubing from "../assets/CaveTubing.jpg";

export default function TubingCaveDestination() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Embark on an Exciting Cave Tubing Adventure
          </h1>
          <p className="mb-8 leading-relaxed">
            Dive into a world of mystery and excitement as you float through
            underground rivers, surrounded by ancient rock formations and
            breathtaking cave chambers. Feel the thrill as you drift along the
            cool, dark waters, guided only by the glimmer of natural light
            filtering through the caves openings. Marvel at the stunning
            stalactites and stalagmites that have formed over thousands of
            years, creating a mesmerizing underground paradise. The echoes of
            flowing water and hidden wonders make cave tubing an unforgettable
            journey—perfect for those seeking adventure, natural beauty, and a
            touch of the unknown.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="gambarCaveTubing"
            src={CaveTubing}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
