import React from "react";

const EndToEndMaintances = ({ button_Text, title, description }) => {
  return (
    <section className="px-12 py-24 bg-white rounded-xl">
      <button className="text-[#3CAB5C] border border-green-600 rounded-full px-4 py-1 text-sm mb-6 ">
        {button_Text}
      </button>

      <h2 className="text-7xl md:text-6xl    max-w-6xl leading-[72px] tracking-normal">
        {title}
      </h2>

      <p className="text-2xl my-8  font-normal  ">{description}</p>
    </section>
  );
};

export default EndToEndMaintances;
