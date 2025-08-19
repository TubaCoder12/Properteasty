import React from "react";
import HeroSection_image from "../../assets/images/HeroSection_image.png";

const HeroSection = () => {
  return (
    <div className="relative h-[700px] rounded-2xl overflow-hidden mx-12 my-3">
      {/* Background Image */}
      <img
        src={HeroSection_image}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-7xl md:text-6xl  text-[#FFFFFF]  max-w-4xl leading-[72px] tracking-normal">
          Owning Rental Properties is Not Supposed to be a Full Time Job
        </h1>
        <p className="mt-4 text-2xl md:text-xl text-gray-200 font-normal ">
          Let us handle the repairs so you can focus on profits, not problems
        </p>
        <button className="mt-6 bg-[#3CAB5C] text-white px-4 py-3 rounded-xl font-medium hover:bg-green-600 transition text-base">
          Get Started as a Landlord
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
