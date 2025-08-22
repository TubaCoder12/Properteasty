import React from "react";
import Logo from "../../assets/Icons/Navbar_Logo.svg";

const Footer = () => {
  const footerLinks = [
    {
      title: "Property owners",
      links: [
        "Post a job",
        "Find contractors",
        "How pricing works",
        "Safety & insurance",
        "Property management",
      ],
    },
    {
      title: "Vendors",
      links: [
        "Find work",
        "How to get started",
        "Success stories",
        "Payment protection",
        "Professional resources",
      ],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Press", "Contact", "Help center"],
    },
    {
      title: "Legal",
      links: ["Privacy policy", "Terms of service", "Cookie policy"],
    },
  ];

  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <footer className="bg-gray-50 pt-12 pb-5  md:px-12  px-4">
        <div className="max-w-6xl  text-gray-800">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20">
            <div className="flex flex-col w-full lg:w-1/3 text-left lg:text-left mb-8 lg:mb-0">
              <img src={Logo} alt="PropertyEasy Logo" className="  mb-5 w-32" />
              <p className="text-sm font-[400] leading-[22px]">
                Connecting property owners with trusted maintenance
                professionals. Making property upkeep simple, reliable, and
                affordable.
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full lg:w-2/3 text-sm text-gray-700">
              {footerLinks.map((col, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-3 leading-[22px]">
                    {col.title}
                  </h3>
                  <ul className="space-y-2">
                    {col.links.map((link, i) => (
                      <li
                        key={i}
                        className=" cursor-pointer text-[14px] font-[400] leading-[22px]"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <p className="text-left text-sm mt-[64px] leading-[22px] font-[400]">
            © 2025 PropertyEasy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
