import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";
import "../../style/myWorkSkill.css";

export default function Skills() {
  return (
    <section className="skills_section" id="skills">
      <h2>MY WORK SKILLS</h2>
      

      <div className="skills_box">
        <div className="skills_row">
          <SkillCard icon={<FaHtml5  color="#e34c26"/>} title="HTML" percent="95%" />
          <SkillCard icon={<FaCss3Alt color="#264de4" />} title="CSS" percent="90%" />
          <SkillCard icon={<FaJs color="#2f0db4f64de4"/>} title="JavaScript" percent="85%" />
          <SkillCard icon={<FaReact color="#61dbfb"/>} title="React" percent="80%" />
        </div>

        <div className="skills_row">
          <SkillCard icon={<FaPhp color="#777BB4"/>} title="PHP" percent="75%" />
          <SkillCard icon={<FaDatabase color="#00758F"/>} title="MySQL" percent="70%" />
          <SkillCard icon={<SiTailwindcss color="#06B6D4"/>} title="Tailwind" percent="85%" />
          <SkillCard icon={<SiFigma color="F24E1E"/>} title="Figma" percent="80%" />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, percent }) {
  return (
    <div className="skill_card">
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <div className="progress">
        <span style={{ width: percent }}>{percent}</span>
      </div>
    </div>
  );
}