import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header";
import Properties from "./Pages/Properties";
import Booking from "./Pages/Booking";
import Payment from "./Pages/Payment";
import Footer from "./components/Footer";
import ViewBooking from "./Pages/ViewBooking";

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
          <Route path="/viewbooking/:id" element={<ViewBooking/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
