import React from "react";
import CardContent from "../CardContent/CardContent";

import Lin from "../../assets/Icons/Licensed.svg";
import location from "../../assets/Icons/Location.svg";
import award from "../../assets/Icons/Award.svg";
import star from "../../assets/Icons/Star.svg";
const EndToEnd = () => {
  const Features = [
    {
      icon: Lin,
      title: "Licensed & Insured",
    },
    {
      icon: location,
      title: "Locally Vetted",
    },
    {
      icon: star,
      title: "Highly Rated",
    },
    {
      icon: award,
      title: "Satisfaction Guarantee",
    },
  ];
  return (
    <>
      <CardContent
        button_Text="End-to-End Repair Management"
        title="Service Professionals you can Trust"
        description="We get it, finding a trusted professional is hard. Properteasy removes the guesswork by vetting every service professional before they ever reach your door. "
      />
      <div className="w-full    pb-24">
        <div
          className={` max-w-[1800px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-12 px-4
           gap-3`}
        >
          {Features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start  bg-[#F6F7F9] px-6 py-8 rounded-[20px] shadow-sm "
            >
              {item.icon && (
                <img
                  src={item.icon}
                  alt={item.title || "feature icon"}
                  className="w-12 h-12 text-green-500"
                />
              )}

              {item.title && (
                <h4 className="text-2xl leading-[30px] tracking-normal pt-5">
                  {item.title}
                </h4>
              )}

              {item.description && (
                <p className="text-base leading-[24px] tracking-normal  pt-8 font-normal">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="  py-12 md:px-12 px-4 text-[24px]  font-normal leading-9 tracking-normal space-x-[6px]">
          Our rigorous evaluation process includes license and insurance
          verification, as well as client reference validation. Only those who
          demonstrate consistent excellence and reliability are given the
          opportunity to serve our landlords and their tenants.
        </p>
        <p className=" text-[24px] md:px-12 px-4  font-normal leading-9 tracking-normal space-x-[6px]">
          Our screening process is hands on, ensuring only the most dependable,
          skilled, and trustworthy vendors make the cut. Our service providers
          are established local tradesmen with proven track records, the
          professionals you wish you had from the start. With Properteasy, now
          you do.
        </p>
      </div>
    </>
  );
};

export default EndToEnd;
