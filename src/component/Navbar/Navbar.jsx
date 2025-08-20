import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Icons/Navbar_Logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-4 md:px-12 py-4 flex items-center justify-between font-albert relative">
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-8 w-auto cursor-pointer" />
      </Link>

      {/* Desktop Links (lg and above) */}
      <ul className="hidden lg:flex space-x-6 font-medium flex-1 justify-center">
        <li>
          <Link to="/property-maintances" className="cursor-pointer">
            Property Maintances
          </Link>
        </li>
        <li>
          <Link to="/end-to-end-management" className="cursor-pointer">
            End-To-End Management
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="cursor-pointer">
            Pricing
          </Link>
        </li>
      </ul>

      {/* Buttons + Hamburger (md only) */}
      <div className="flex items-center space-x-4 md:space-x-2 md:gap-[10px]">
        <Link
          to="#"
          className="p-3 rounded-xl bg-[#ECECEC] hidden md:inline-block"
        >
          Get started
        </Link>
        <Link
          to="#"
          className="bg-[#3CAB5C] text-white p-3 rounded-xl hidden md:inline-block"
        >
          Submit a request
        </Link>

        {/* Hamburger / Close button for mobile and md */}
        <button
          className="md:inline-block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile & MD Menu */}
      {/* Mobile & MD Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center lg:hidden py-4 space-y-4">
          {/* Links: visible on md and below */}
          <Link to="/property-maintances" className="cursor-pointer">
            Property Maintances
          </Link>
          <Link to="/end-to-end-management" className="cursor-pointer">
            End-To-End Management
          </Link>
          <Link to="/pricing" className="cursor-pointer">
            Pricing
          </Link>

          {/* Buttons: only sm screens, hidden on md */}
          <div className="flex flex-col items-center space-y-4 md:hidden w-full gap-[10px]">
            <Link
              to="#"
              className="p-3 rounded-xl bg-[#ECECEC] w-3/4 text-center"
            >
              Get started
            </Link>
            <Link
              to="#"
              className="bg-[#3CAB5C] text-white p-3 rounded-xl w-3/4 text-center"
            >
              Submit a request
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
