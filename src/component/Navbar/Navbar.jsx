import { useState } from "react";

import { Link } from "react-router-dom";
import Logo from "../../assets/Icons/Navbar_Logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-white px-12 py-4 flex items-center justify-between font-albert">
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-8 w-auto cursor-pointer" />
      </Link>

      <ul className="hidden md:flex space-x-6 font-medium">
        <li>
          <Link to="/property-maintances" className="cursor-pointer">
            Property Maintances
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="cursor-pointer">
            Pricing
          </Link>
        </li>

        <li>
          <Link to="/contact" className="cursor-pointer">
            Contact us
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link to="#" className="p-3 rounded-xl bg-[#ECECEC]">
          Get started
        </Link>
        <Link to="#" className="bg-[#3CAB5C] text-[#FFFFFf] p-3  rounded-xl">
          Submit a request
        </Link>
      </div>
    </nav>
  );
}
