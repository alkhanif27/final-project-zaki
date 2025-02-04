import Pantai from "../assets/Pantai.jpg";
import JeepTour from "../assets/JeepTour.jpg";
import Candi from "../assets/Candi.jpg";
import CaveTubing from "../assets/CaveTubing.jpg";

export default function SectionDestination() {
  return (
    <>
      <div className="container bg-gray-100 ">
        <p className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl p-5">
          Our Favourite Destination
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto ">
          <div
            className="relative isolate flex flex-col justify-end overflow-hidden
          rounded-2xl px-8 pb-8 pt-40"
          >
            <img
              src={Pantai}
              alt="Pantai"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">BEACH</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Golden Sandy Shores
            </div>
          </div>
          <div
            className="relative isolate flex flex-col justify-end overflow-hidden
          rounded-2xl px-8 pb-8 pt-40"
          >
            <img
              src={JeepTour}
              alt="University of Southern California"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
              JEEP TOUR
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Adventure of Heart
            </div>
          </div>

          <div
            className="relative isolate flex flex-col justify-end overflow-hidden
          rounded-2xl px-8 pb-8 pt-40"
          >
            <img
              src={Candi}
              alt="University of Southern California"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">TEMPLE</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Place of Religion
            </div>
          </div>
          <div
            className="relative isolate flex flex-col justify-end overflow-hidden
          rounded-2xl px-8 pb-8 pt-40"
          >
            <img
              src={CaveTubing}
              alt="University of Southern California"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
              CAVE TUBING
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Its a Journey
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
