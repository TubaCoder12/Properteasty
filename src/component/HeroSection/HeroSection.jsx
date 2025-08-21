import React from "react";
import HeroSection_image from "../../assets/images/HeroSection_image.png";

const HeroSection = () => {
  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <div className="relative h-[700px] md:h-[600px] sm:h-[500px] rounded-2xl overflow-hidden md:mx-12 mx-4 my-3 z-0">
        <img
          src={HeroSection_image}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
          <h1 className="text-[27px] md:text-6xl lg:text-7xl text-white  leading-[37px] md:leading-[72px] tracking-normal">
            Owning Rental Properties is Not Supposed to be a Full Time Job
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl  font-[400]  text-white">
            Let us handle the repairs so you can focus on profits, not problems
          </p>
          <button className="mt-6 bg-[#3CAB5C] text-white px-4 py-3 rounded-xl font-medium transition text-base md:text-base">
            Get Started as a Landlord
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
