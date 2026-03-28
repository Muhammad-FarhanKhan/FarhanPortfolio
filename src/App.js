/* src/App.js */
import React from "react";
import { useEffect } from "react";
import Home from "./pages/Home.jsx";
import "./style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/services.jsx";
import RecentWork from "./components/recentWork/recentWork.jsx"

function App() {
  useEffect(() => {
    if (window.innerWidth <= 768) {
      alert(
        " For the best experience, please open this website on a desktop!",
      );
    }
  }, []);

  return (
    <Router basename="/FarhanPortfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/recentWork" element={<RecentWork />} />
      </Routes>
    </Router>
  );
}

export default App;``
