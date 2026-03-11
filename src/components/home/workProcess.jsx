import "../../style/service.css";
import videoeditor from "../../image/VideoEditor.jpeg"
import uiux from "../../image/uiux.png"
import webDevelop from "../../image/webDevelop1.jpeg"


export default function WorkProcess() {
  return (
    <div className="workprocess_container">
      <h1>MY SERVICES</h1>

      <div className="services">
        {" "}
        <div className="serviceBox">
          {" "}
          <img src={uiux} alt="Service 1" /> <h3>UI / UX DESIGN</h3>{" "}
        </div>{" "}
        <div className="serviceBox">
          {" "}
          <img src={webDevelop} alt="Service 2" /> <h3>WEB DEVELOPMENT</h3>{" "}
        </div>{" "}
        <div className="serviceBox">
          {" "}
          <img src={videoeditor} alt="Service 3" />{" "}
          <h3>VIDEO EDITOR</h3>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
