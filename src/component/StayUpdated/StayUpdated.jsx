import React from "react";
import img from "../../assets/images/StayUpadted.jpg";

const StayUpdated = () => {
  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <div className="relative bg-cover bg-center py-24 px-4 sm:px-7 text-center text-white">
        {/* Background Image */}
        <img
          src={img}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3A4151]/85"></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Button */}
          <button className="bg-[#3CAB5C] text-white px-4 py-2 rounded-[40px] gap-[10px] text-[14px] font-[500] leading-[22px] tracking-[2.5%] mb-6 sm:mb-8">
            Stay updated
          </button>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-[500] leading-[36px] sm:leading-[48px] md:leading-[60px] lg:leading-[72px] tracking-normal py-4 sm:py-6">
            Stay Updated with Properteasy
          </h2>

          {/* Subtitle */}
          <p className="mx-auto text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[400] leading-[28px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] tracking-[2.5%] ">
            Get the latest tips on property maintenance, industry insights, and
            platform updates delivered to your inbox.
          </p>

          {/* Input & Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 mt-8 sm:mt-12 w-full max-w-2xl">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-[60%] h-12 px-4 py-3 border text-[16px] rounded-xl text-black outline-none"
            />
            <button className="w-full sm:w-[40%] h-12 px-4 py-3 text-[16px] rounded-xl bg-green-500 text-white font-[500]">
              Subscribe to our Newsletter
            </button>
          </div>

          {/* Privacy text */}
          <p className="text-sm  mt-3 text-center px-2 sm:px-0 leading-[22px] font-[400]">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StayUpdated;
