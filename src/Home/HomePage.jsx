import React from "react";
import HeroSection from "../component/HeroSection/HeroSection";

import RepairProcess from "../component/ProperteastyWork/ProperteastyWork";
import PricingSection from "../component/Pricing/Pricing";
import PropertyMaintances from "../component/PropertyMaintances/PropertyMaintances";
import EndToEnd from "../component/EndToEnd/EndToEnd";
import ToggleSwitch from "../component/ProperteastyDifferent/ProperteastyDifferent";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <PropertyMaintances />
      <EndToEnd />
      <RepairProcess />
      <PricingSection />
      <ToggleSwitch />
    </>
  );
};

export default HomePage;
