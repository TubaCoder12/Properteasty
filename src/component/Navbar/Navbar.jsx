import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Icons/Navbar_Logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 font-albert relative z-10">
      <div className="lg:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <a href="#home">
          <img src={Logo} alt="Logo" className="h-8 w-auto cursor-pointer" />
        </a>

        <ul className="hidden lg:flex space-x-6 font-medium flex-1 justify-center">
          <li>
            <a href="#maintances" className="cursor-pointer">
              Maintances
            </a>
          </li>
          <li>
            <a href="#management" className="cursor-pointer">
              Management
            </a>
          </li>
          <li>
            <a href="#working" className="cursor-pointer">
              Working
            </a>
          </li>
          <li>
            <a href="#pricing" className="cursor-pointer">
              Pricing
            </a>
          </li>
          <li>
            <a href="#faqs" className="cursor-pointer">
              Faqs
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4 md:space-x-2 md:gap-[10px]">
          <a
            href="#get-started"
            className="p-3 rounded-xl bg-[#ECECEC] hidden md:inline-block"
          >
            Get started
          </a>
          <a
            href="#request"
            className="bg-[#3CAB5C] text-white p-3 rounded-xl hidden md:inline-block"
          >
            Submit a request
          </a>

          <button
            className="md:inline-block lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-left lg:hidden py-4 space-y-4 px-4">
          <a href="#maintances" className="cursor-pointer">
            Maintances
          </a>
          <a href="#management" className="cursor-pointer">
            Management
          </a>
          <a href="#working" className="cursor-pointer">
            Working
          </a>
          <a href="#pricing" className="cursor-pointer">
            Pricing
          </a>
          <a href="#faqs" className="cursor-pointer">
            Faqs
          </a>

          <div className="flex flex-col items-left space-y-4 md:hidden w-full gap-[10px]">
            <a
              href="#get-started"
              className="p-3 rounded-xl bg-[#ECECEC] w-[115px] text-center"
            >
              Get started
            </a>
            <a
              href="#request"
              className="bg-[#3CAB5C] text-white p-3 rounded-xl w-3/4 text-center"
            >
              Submit a request
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
