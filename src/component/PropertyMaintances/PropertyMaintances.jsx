import React from "react";
import CardContent from "../CardContent/CardContent";
import CardStructure from "../CardContent/CardStructure";

// Icons
import Link from "../../assets/Icons/Link.svg";
import Plugin from "../../assets/Icons/Plugin.svg";
import Search from "../../assets/Icons/Search.svg";

const Features = [
  {
    icon: Search,
    title: "We handle maintenance for you",
    description:
      "Tenants submit requests through our system, and we take care of assigning the right vendor. No calls, no back-and-forth, no stress.",
  },
  {
    icon: Plugin,
    title: "You can see what's going on",
    description:
      "Track the status of every job in your dashboard. Get updates, photos, and invoices without having to follow up with tenants or vendors.",
  },
  {
    icon: Link,
    title: "Everything is in one place",
    description:
      "All requests, jobs, and payments are managed through one simple platform. No disorganized texts, emails, or paperwork.",
  },
];

const PropertyMaintances = () => {
  return (
    <>
      <CardContent
        button_Text="Property Maintenance"
        title="Everything You Need To Manage Repairs Without The Headaches"
        description="We handle repair requests from start to finish, including vendor
        dispatch and real-time progress updates. You stay in control without
        dealing with calls, scheduling, or follow ups."
      />

      <div className="w-full  md:px-12  pb-24">
        <div
          className={`max-w-[85rem] mx-auto grid grid-cols-1 md:grid-cols-3
           gap-3`}
        >
          {Features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start  bg-[#F6F7F9] px-6 py-8 rounded-[20px] shadow-sm "
            >
              {/* Icon agar hai to show kare */}
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

              {/* Description agar hai to show kare */}
              {item.description && (
                <p className="text-base leading-[24px] tracking-normal  pt-8 font-normal">
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

export default PropertyMaintances;
