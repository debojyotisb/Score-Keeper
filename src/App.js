import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GameHazari from "./pages/GameHazari";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gradient-to-r from-blue-50 to-blue-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/360" element={<GameHazari />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
