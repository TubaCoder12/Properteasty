import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Home/HomePage";

import Navbar from "./component/Navbar/Navbar";
import PricingPage from "./pages/PricingPage";
import PropertyMaintancePage from "./pages/PropertyMaintancePage";
import EndToEndManagement from "./pages/EndToEndManagement";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/end-to-end-management" element={<EndToEndManagement />} />
        <Route
          path="/property-maintances"
          element={<PropertyMaintancePage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
