import React from "react";
import HeroSection from "../component/HeroSection/HeroSection";

import RepairProcess from "../component/ProperteastyWork/ProperteastyWork";
import PricingSection from "../component/Pricing/Pricing";
import PropertyMaintances from "../component/PropertyMaintances/PropertyMaintances";
import EndToEnd from "../component/EndToEnd/EndToEnd";
import ToggleSwitch from "../component/ProperteastyDifferent/ProperteastyDifferent";
import FrequentlyAskedQuestions from "../component/FrequentlyAsked/FrequentlyAsked";
import StayUpdated from "../component/StayUpdated/StayUpdated";
import Footer from "../component/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PropertyMaintances />
      <EndToEnd />
      <RepairProcess />
      <PricingSection />
      <ToggleSwitch />
      <FrequentlyAskedQuestions />
      <StayUpdated />
      <Footer />
    </>
  );
};

export default HomePage;
