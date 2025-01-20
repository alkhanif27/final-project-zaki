import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-4 px-3 mt-16 container">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <p className="text-xs text-gray-400 md:text-sm">
              Copyright 2005 &copy; All Rights Reserved
            </p>
          </div>
          <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-400 hover:text-white">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
