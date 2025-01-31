// eslint-disable-next-line react/prop-types
export default function BookingButtonPackage({ packageName, category = "jogja" }) {
  // Nomor WhatsApp berdasarkan kategori halaman
  const phoneNumbers = {
    jogja: "6289988776655", // Nomor WA untuk paket Jogja
    dieng: "6285566778899", // Bisa ditambah untuk Tour Dieng
  };

  const message = `Hello, I am interested in booking the ${packageName} package from the ${category} tour. Is it available?`;
  const waLink = `https://wa.me/${phoneNumbers[category]}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md text-lg font-semibold hover:bg-green-600 transition duration-300 text-center block"
    >
      Book Now!
    </a>
  );
}
