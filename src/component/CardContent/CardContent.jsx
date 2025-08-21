import React from "react";

const CardContent = ({ button_Text, title, description }) => {
  return (
    <section className="lg:px-12 md:px-12 pt-24 px-4 bg-white rounded-xl">
      <button className="text-[#3CAB5C] border border-[#3CAB5C] bg-[#3CAB5C1A] rounded-full px-4 py-1 text-sm mb-6 ">
        {button_Text}
      </button>

      <h2 className="lg:text-7xl  text-[42px] font-[500]   lg:leading-[72px] leading-[42px] tracking-normal space-x-[6px]">
        {title}
      </h2>

      <p className="text-2xl my-8  font-normal  ">{description}</p>
    </section>
  );
};

export default CardContent;
