import Footer from "./Footer";
import Navbar from "./Navbar";
import Candi from "../assets/Candi.jpg";

export default function TempleDestination() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Step Into the Sacred Beauty of Ancient Temples
          </h1>
          <p className="mb-8 leading-relaxed">
            Journey to a place where history and spirituality intertwine, where
            ancient temples stand as timeless symbols of devotion and culture.
            Marvel at the intricate stone carvings and towering pagodas that
            whisper stories of the past. As the sun rises, watch golden rays
            illuminate the temple’s silhouette, creating a breathtaking
            spectacle. Explore sacred grounds filled with centuries-old relics,
            where the air is thick with tranquility and reverence. Whether
            seeking spiritual enlightenment or admiring architectural wonders,
            temples offer a serene escape, connecting you to a rich heritage and
            the echoes of time.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="gambarpantai"
            src={Candi}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
