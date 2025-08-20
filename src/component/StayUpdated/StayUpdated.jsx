import React from "react";
import img from "../../assets/images/StayUpadted.jpg";

const StayUpdated = () => {
  return (
    <div className="relative bg-cover bg-center py-24 px-7 text-center text-white">
      <img
        src={img}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#3A4151]/85"></div>

      <div className="relative z-10 ">
        <button className="bg-[#3CAB5C]  text-white px-4 py-2 rounded-[40px] gap-[10px] text-[14px] font-[500] leading-[22px] tracking-[2.5%] ">
          Stay updated
        </button>

        {/* Heading */}
        <h2 className="text-3xl md:text-7xl font-[500] leading-[72px] tracking-normal py-6 ">
          Stay Updated with Properteasy
        </h2>

        {/* Subtitle */}
        <p className="  mx-auto text-[24px] font-[400] leading-[36px] tracking-[2.5%]  ">
          Get the latest tips on property maintenance, industry insights, and
          platform updates delivered to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 mt-16">
          {/* Input */}
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-[398px] h-12 px-4 py-3 border text-[16px] rounded-xl text-black outline-none"
          />

          {/* Button */}
          <button className="w-full sm:w-[230px] h-12 px-4 py-3  text-[16px] rounded-xl bg-green-500 text-white font-[500] ">
            Subscribe to our Newsletter
          </button>
        </div>

        {/* Privacy text */}
        <p className="text-sm text-gray-300 mt-3">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  );
};

export default StayUpdated;
