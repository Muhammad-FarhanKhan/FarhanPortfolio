/* src/components/ResumeButton.jsx */
import React from "react";
import "../../style/App.css";
import cv from "../../pdf/Muhammad Farhan Khan CV.pdf";


export default function ResumeButton() {
  return (
  <a href={cv} download className="resume-button" id="resume">    
      Download Resume
    </a>
  );
}