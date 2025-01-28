import { useState } from "react";
import { Link } from "react-router";
import LogoNeza from "../assets/LogoNeza.png";

export default function Navbar() {
  const menus = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/Service" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-green-900 p-4 sticky container">
      <div className="container flex justify-between items-center py-5">
        {/* logo */}
        <div>
      <Link to="/">
        <img src={LogoNeza} alt="logo" className="w-36 h-16" />
      </Link>
    </div>
        {/* menus desktop */}
        <ul className="sm:flex gap-4 items-center hidden font-bold ">
          {/* pengulangan array list menus */}
          {menus.map((menu, index) => (
            <li key={index}>
              <Link to={menu.link} className="hover:opacity-50 transition-all">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* button trigger mobile menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
          Menu
        </button>

        {/* menus mobile */}
        <ul
          className={`sm:hidden gap-4 items-center flex font-bold flex-col bg-blue-200 fixed top-0 right-0 w-2/3 h-full z-50 py-12 ${
            isOpen ? `translate-x-0` : `translate-x-full`
          } transition-all`}
        >
          {/* close button */}
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
          {/* pengulangan array list menus */}
          {menus.map((menu, index) => (
            <li key={index}>
              <Link to={menu.link} className="hover:opacity-50 transition-all">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* background overlay */}
        <div
          className={`sm:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-all ${
            isOpen ? `translate-x-0` : `translate-x-full`
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
      </div>
    </nav>
  );
}
