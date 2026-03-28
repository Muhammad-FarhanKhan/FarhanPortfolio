import React from "react";
import Navbar from "../components/home/Navbar";
import About from "../components/home/about"
import RecentWork from "../components/recentWork/recentWork.jsx";
import Footer from "../components/home/footer.jsx";


function recentWork() {
  return (
    <>
      <Navbar />
      <About />
      
      <RecentWork />

      <Footer />
    </>
  );
}

export default recentWork;