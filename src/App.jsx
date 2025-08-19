import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Home/HomePage";

import { ContactUsPage } from "./pages/ContactUsPage";
import Navbar from "./component/Navbar/Navbar";
import PricingPage from "./pages/PricingPage";
import PropertyMaintancePage from "./pages/PropertyMaintancePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home (placeholder) */}
        <Route path="/" element={<HomePage />} />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route
          path="/property-maintances"
          element={<PropertyMaintancePage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
