import Footer from "./Footer";
import Navbar from "./Navbar";
import Pantai from "../assets/Pantai.jpg";

export default function BeachDestination() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Discover the Serenity of Tropical Beaches
          </h1>
          <p className="mb-8 leading-relaxed">
            Escape to the tranquil beauty of golden sandy shores, where the
            sound of crashing waves and the salty breeze create a perfect
            paradise. Wake up to a mesmerizing sunrise as the horizon glows with
            warm hues, painting the sky in breathtaking colors. Feel the soft
            sand beneath your feet as you walk along the coastline, with
            turquoise waters stretching endlessly. Explore hidden coves, vibrant
            coral reefs, and swaying palm trees that whisper tales of the ocean.
            Whether youre seeking relaxation, thrilling water adventures, or
            stunning sunset views, the beach offers a magical retreat where
            nature and serenity blend harmoniously.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="gambarpantai"
            src={Pantai}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
