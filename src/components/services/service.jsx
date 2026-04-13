import "../../style/ServiceAndRecentWork.css";
import database from "../../image/database.jpeg"
import uiux from "../../image/uiux.png"
import frontend from "../../image/frontend.jpeg"
import backend from "../../image/backend.jpeg"
import responsive from "../../image/responsive.jpg"
import webdesign from "../../image/webdesign.jpeg"
import webDevelop from "../../image/webDevelop1.jpeg"
import appDesign from "../../image/appDesign.jpg"
import Animation from "../../image/animation.png"
import { useNavigate } from "react-router-dom";

export default function WorkProcess() {

    const navigate = useNavigate();

  return (
    <div id="services" className="workprocess_container">
      <h1>MY SERVICES</h1>

 <div className="services">
  <div className="serviceBox" onClick={() => navigate("/contact")}>
    <img src={uiux} alt="Service 1" />
    <h3>UI / UX DESIGN</h3>
  </div>
  <div className="serviceBox" onClick={() => navigate("/contact")}>
    <img src={frontend} alt="Service 2" />
    <h3>FRONTEND DEVELOPMENT</h3>
  </div>
  <div className="serviceBox" onClick={() => navigate("/contact")}>
    <img src={backend} alt="Service 3" />
    <h3>BACKEND DEVELOPMENT</h3>
  </div>
  <div className="serviceBox" onClick={() => navigate("/contact")}>
    <img src={appDesign} alt="Service 4" />
    <h3>APP DESIGN</h3>
  </div>
  <div className="serviceBox" onClick={() => navigate("/contact")}>
    <img src={webDevelop} alt="Service 5" />
    <h3>FULLSTACK DEVELOPMENT</h3>
  </div>
  <div className="serviceBox" onClick={() => navigate("/contact")}>
    <img src={responsive} alt="Service 6" />
    <h3>RESPONSIVE DESIGN</h3>
  </div>
  <div className="serviceBox" onClick={() => navigate("/contact")}>
    <img src={webdesign} alt="Service 7" />
    <h3>WEBSITE DESIGN</h3>
  </div>
  <div className="serviceBox" onClick={() => navigate("/contact")}>
    <img src={Animation} alt="Service 8" />
    <h3>ANIMATION UI</h3>
  </div>
  <div className="serviceBox" onClick={() => navigate("/contact")}>
    <img src={database} alt="Service 9" />
    <h3>DATABASE MANAGEMENT</h3>
  </div>
</div>
    </div>
  );
}
