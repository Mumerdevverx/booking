import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./HomePage";
import Header from "./Header";
import Properties from "./Properties";
import Booking from "./Booking";
import Payment from "./Payment";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      {/* Header always visible */}
      <Header />

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties/:id" element={<Properties />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/payment/:id" element={<Payment />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
