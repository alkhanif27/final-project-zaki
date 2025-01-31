export default function NotesRentCar() {
  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow-md max-w-2xl w-full text-center">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
          📌 IMPORTANT NOTES:
        </h3>
        <ul className="list-disc text-left pl-5 text-gray-700 text-sm space-y-2">
          <li>
            <span className="font-medium">For city trips only:</span> Includes
            Keraton Yogyakarta, Benteng Vredeburg, Taman Sari, Malioboro,
            Prambanan Temple, and Borobudur Temple.
          </li>
          <li>Inter-city trips will be subject to additional charges.</li>
          <li>
            <span className="font-medium">The price does not include:</span>{" "}
            Drivers meals, parking fees, entrance tickets to tourist
            attractions, etc.
          </li>
          <li>
            Overtime charge of <span className="font-bold">10%</span> per hour.
          </li>
          <li>
            Additional fees apply during{" "}
            <span className="font-bold">
              weekends, long weekends, holiday seasons, Eid, Christmas, and New
              Year.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
