import "../../style/service.css";
import database from "../../image/database.jpeg"
import uiux from "../../image/uiux.png"
import webDevelop from "../../image/webDevelop1.jpeg"
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
        <img src={webDevelop} alt="Service 2" />
        <h3>WEB DEVELOPMENT</h3>
      </div>

      <div className="serviceBox" onClick={() => navigate("/contact")}>
        <img src={database} alt="Service 3" />
        <h3>DATABASE</h3>
      </div>
    </div>


     <div className="exploreBtnBox">
  <button className="exploreBtn" onClick={() => navigate("../services")}>
    EXPLORE MORE!
  </button>
</div>

    </div>
  );
}
