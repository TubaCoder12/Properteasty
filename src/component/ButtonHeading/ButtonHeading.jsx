import React from "react";
import PropertyMaintance from "./PropertyMaintance";
import End_to_End_Maintances from "./CardContent";
import Link from "../../assets/Icons/Link.svg";
import Plugin from "../../assets/Icons/Plugin.svg";
import Search from "../../assets/Icons/Search.svg";
import Lin from "../../assets/Icons/Licensed.svg";
import location from "../../assets/Icons/Location.svg";
import award from "../../assets/Icons/Award.svg";
import star from "../../assets/Icons/Star.svg";

import CardContent from "./CardContent";
const ButtonHeading = () => {
  return (
    <div className="grid grid-cols-1 gap-4 ">
      <PropertyMaintance
        button_Text="Property Maintenance"
        title=" Everything You Need To Manage Repairs Without The Headaches"
        description="  We handle repair requests from start to finish, including vendor
        dispatch and real-time progress updates. You stay in control without
        dealing with calls, scheduling, or follow ups."
        cardIcon1={Plugin}
        cardTittle1="We handle maintenance for you"
        cardDescription1="Tenants submit requests through our system, and we take care of assigning the right vendor. No calls, no back-and-forth, no stress."
        cardIcon2={Search}
        cardTittle2="You can see what's going on"
        cardDescription2="Track the status of every job in your dashboard. Get updates, photos, and invoices without having to follow up with tenants or vendors."
        cardIcon3={Link}
        cardTittle3="Everything is in one place"
        cardDescription3="All requests, jobs, and payments are managed through one simple platform. No disorganized texts, emails, or paperwork."
      />
    </div>
  );
};

export default ButtonHeading;
