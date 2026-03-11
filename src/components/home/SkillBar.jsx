/* src/components/SkillBar.jsx */
import React, { useEffect, useRef } from "react";
import "../App.css";
import "../../style/myWorkSkill.css";

export default function SkillBar({ skill, level }) {
  const barRef = useRef();

  useEffect(() => {
    barRef.current.style.width = level + "%";
  }, [level]);

  return (
    <div className="skill-bar">
      <div className="skill-bar-name">{skill}</div>
      <div className="skill-bar-outer" style={{ backgroundColor: "#d1d5db", borderRadius: "6px" }}>
        <div ref={barRef} className="skill-bar-inner"></div>
      </div>
    </div>
  );
}