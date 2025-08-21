import React from "react";
import CardContent from "../CardContent/CardContent";

const PricingSection = () => {
  const Features = [
    {
      title: "Know what to expect before work begins",
      description:
        "Our system is built around smart technology to give you an estimated price range for repairs based upon the details you provide, recent similar jobs, local labor rates, and vendor pricing trends. This upfront range gives you the ability to make informed decisions without any surprises. Once the job is complete, you will only pay for the work that was done.",
    },
    {
      title: "There is No Substitute for Hands-on Diagnostic Experience",
      description:
        "In rare instances, a deeper issue is uncovered on site, such as a slow drain that turns out to be caused by a collapsed waste pipe, not a clog. In such cases, vendors report the findings, and Properteasy alerts you right away. We only move forward if you approve the additional work and revised estimate. You’re always in control of what gets done, and just as importantly, what doesn’t.",
    },
  ];
  return (
    <>
      <CardContent
        button_Text="Pricing"
        title=" Transparent Pricing & Clear Expectations"
      />
      <div className="w-full   pb-24">
        <div
          className={`max-w-[1800px]  grid grid-cols-1 md:grid-cols-2  md:px-12 px-4
           gap-3`}
        >
          {Features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start  bg-[#F6F7F9] px-6 py-8 rounded-[24px] shadow-sm "
            >
              {item.title && (
                <h4 className="text-[40px] leading-[48px] tracking-normal ">
                  {item.title}
                </h4>
              )}

              {/* Description agar hai to show kare */}
              {item.description && (
                <p className="text-2xl leading-[36px] tracking-normal  pt-8 font-normal text-[#333333]">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingSection;
