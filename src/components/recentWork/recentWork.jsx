import "../../style/ServiceAndRecentWork.css";
import EarnByKnowledge from "../../image/earnByKnowledge.png"
import Donut from "../../image/Donut Website UI1.png"
import TaskFlow from "../../image/TaskFlow Website.png"
import backend from "../../image/backend.jpeg"

import { useNavigate } from "react-router-dom";

export default function WorkProcess() {

    const navigate = useNavigate();

  return (
    <div id="services" className="workprocess_container">
      <h1>MY SERVICES</h1>

 <div className="services">
  <div className="serviceBox" onClick={() => navigate("/contact")}>
    <img src={Donut} alt="Design 1" />
    <h3>Donut UI/UX Design</h3>
  </div>
  <div className="serviceBox" onClick={() => navigate("/contact")}>
    <img src={EarnByKnowledge} alt="Service 2" />
    <h3>EarnByKnowledge</h3>
  </div>
  <div className="serviceBox" onClick={() => navigate("/contact")}>
    <img src={TaskFlow} alt="Service 3" />
    <h3>TaskFlow Management</h3>
  </div>
 


 
</div>
    </div>
  );
}
