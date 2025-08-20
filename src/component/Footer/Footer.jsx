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
    <footer className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto flex gap-16 pt-24 pr-12 pb-16 pl-12">
        {/* First Column */}
        <div className="flex flex-col w-[263px] h-[130px] gap-5">
          <img src={Logo} alt="Logo" className="w-32" />
          <p className="  font-[400] leading-[22px] tracking-[2.5%]  text-sm">
            Connecting property owners with trusted maintenance professionals.
            Making property upkeep simple, reliable, and affordable.
          </p>
        </div>

        <div className="flex gap-16">
          {footerLinks.map((col, index) => (
            <div
              key={index}
              className="flex flex-col w-[174px] h-[198px] gap-4"
            >
              <h3 className="font-semibold text-base leading-[24px] tracking-[2.5%]">
                {col.title}
              </h3>
              <ul className="space-y-2 text-sm  leading-[22px] tracking-[2.5%] font-[400]">
                {col.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="  text-sm  leading-[22px] tracking-[2.5%] font-[400] pb-5 text-left  pr-12  pl-12">
        © 2025 PropertyEasy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
