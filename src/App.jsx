import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Properties from "./components/Properties";
import Booking from "./components/Booking";
import Payment from "./components/Payment";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Header always visible */}
      <Header />

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
