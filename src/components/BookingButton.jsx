export default function BookingButton({ carName }) {
  const phoneNumber = "6281234567890"; // Ganti dengan nomor WA yang diinginkan (tanpa +)
  const message = `Halo, saya tertarik untuk menyewa ${carName}. Bisa beri info lebih lanjut?`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition"
    >
      Book Now!
    </a>
  );
}
