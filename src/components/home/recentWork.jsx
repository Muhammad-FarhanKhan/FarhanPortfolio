import "../../style/service.css";
import videoeditor from "../../image/VideoEditor.jpeg"
import uiux from "../../image/earnByKnowledge.png"
import webDevelop from "../../image/Donut Website UI1.png"


export default function RecentWork() {
  return (
    <div className="workprocess_container">
      <h1>MY RECENT WORK</h1>

      <div className="services">
        {" "}
        <div className="serviceBox">
          {" "}
          <img src={uiux} alt="Service 1" /> <h3>EARN BY KNOWLEDGE</h3>{" "}
        </div>{" "}
        <div className="serviceBox">
          {" "}
          <img src={webDevelop} alt="Service 2" /> <h3>STRAWBERRY DONUT</h3>{" "}
        </div>{" "}
        <div className="serviceBox">
          {" "}
          <img src={videoeditor} alt="Service 3" />{" "}
          <h3>PHONE TRACKER</h3>{" "}
        </div>{" "}
      </div>
      

  <div className="exploreBtnBox">
    <button className="exploreBtn">EXPLORE MORE!</button>
  </div>

    </div>
  );
}
