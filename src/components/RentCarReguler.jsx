import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingButton from "../components/BookingButton";
import NotesRentCar from "./NotesRentCar";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwYEbuLC6dRuTBxcgFOZY9fxEq2mjYzNcEg00a79seGhoEak7ajo4GP6OfVvfqGxeQ/exec";

export default function RentCarReguler() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCars(data.data || []);
        setLoading(false);
      }) 
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const getDirectImageLink = (driveUrl) => {
    const match = driveUrl.match(/\/d\/(.+?)\//);
    const directLink = match
      ? `https://lh3.googleusercontent.com/u/0/d/${match[1]}=w1000`
      : driveUrl;
    return directLink;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="card bg-white shadow-lg rounded-lg overflow-hidden animate-pulse"
                >
                  <div className="w-full h-48 bg-gray-300"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              ))
            : Array.isArray(cars) && cars.length > 0
            ? cars.map((car, index) => (
                <div
                  key={index}
                  className="card bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <figure className="w-full h-48">
                    <img
                      src={getDirectImageLink(car["Gambar Mobil"])}
                      alt={car["Nama Mobil"] || "Gambar tidak tersedia"}
                      className="w-full h-full object-cover"
                      onError={(e) =>
                        console.log("Error loading image:", e.target.src)
                      }
                    />
                  </figure>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {car["Nama Mobil"]}
                    </h2>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>
                        <span className="font-medium">Harga + Driver:</span>
                        <span className="text-green-600 font-bold">
                          {" "}
                          Rp{car["Harga Mobil + Driver"].toLocaleString("id-ID")}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium">Harga + Driver + BBM:</span>
                        <span className="text-red-600 font-bold">
                          {" "}
                          Rp
                          {car["Harga Mobil + Driver + BBM"].toLocaleString(
                            "id-ID"
                          )}
                        </span>
                      </p>
                    </div>
                    <div className="mt-5">
                      <BookingButton carName={car["Nama Mobil"]} />
                    </div>
                  </div>
                </div>
              ))
            : (
                <p className="text-center text-gray-500">Data tidak tersedia.</p>
              )}
        </div>
        <NotesRentCar />
      </div>
      <Footer />
    </>
  );
}