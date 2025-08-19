import React from "react";

const CardContent = ({ button_Text, title, description }) => {
  return (
    <section className="px-12 pt-24 bg-white rounded-xl">
      <button className="text-[#3CAB5C] border border-[#3CAB5C] bg-[#3CAB5C1A] rounded-full px-4 py-1 text-sm mb-6 ">
        {button_Text}
      </button>

      <h2 className="text-7xl     max-w-6xl leading-[72px] tracking-normal space-x-[6px]">
        {title}
      </h2>

      <p className="text-2xl my-8  font-normal  ">{description}</p>
    </section>
  );
};

export default CardContent;
