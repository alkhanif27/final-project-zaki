import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingButton from "../components/BookingButton"; // Import komponen BookingButton
import NotesRentCar from "./NotesRentCar";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwYEbuLC6dRuTBxcgFOZY9fxEq2mjYzNcEg00a79seGhoEak7ajo4GP6OfVvfqGxeQ/exec";

export default function RentCarReguler() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setCars(data.data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Fungsi untuk mengubah URL Google Drive ke direct image link (thumbnail)
  const getDirectImageLink = (driveUrl) => {
    const match = driveUrl.match(/\/d\/(.+?)\//);
    return match
      ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`
      : driveUrl;
  };

  return (
    <>
      <Navbar />
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(cars) && cars.length > 0 ? (
            cars.map((car, index) => (
              <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
                <figure className="w-full h-48">
                  <img
                    src={getDirectImageLink(car["Gambar Mobil"])}
                    alt={car["Nama Mobil"]}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{car["Nama Mobil"]}</h2>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-medium">Harga + Driver:</span> 
                      <span className="text-green-600 font-bold"> Rp{car["Harga Mobil + Driver"].toLocaleString("id-ID")}</span>
                    </p>
                    <p>
                      <span className="font-medium">Harga + Driver + BBM:</span> 
                      <span className="text-red-600 font-bold"> Rp{car["Harga Mobil + Driver + BBM"].toLocaleString("id-ID")}</span>
                    </p>
                  </div>
                  {/* Tambahkan BookingButton di sini */}
                  <div className="mt-5">
                    <BookingButton carName={car["Nama Mobil"]} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading ...</p>
          )}
        </div>
        <NotesRentCar />
      </div>
      <Footer />
    </>
  );
}
