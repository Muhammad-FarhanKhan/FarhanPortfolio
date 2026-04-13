import "../../style/ServiceAndRecentWork.css";
import videoeditor from "../../image/VideoEditor.jpeg"
import EarnByKnowledge from "../../image/earnByKnowledge.png"
import webDevelop from "../../image/Donut Website UI1.png"
import JacketUI from "../../video/JacketUI.mp4";
import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function RecentWork() {

  const navigate = useNavigate();

    const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div id="projects" className="workprocess_container">
      <h1>MY RECENT WORK</h1>

      <div className="services">
     
        <div className="serviceBox">
          <img src={EarnByKnowledge} alt="Service 1" /> <h3>EarnByKnowledge Web</h3>{" "}
        </div>

        <div className="serviceBox">
          <img src={webDevelop} alt="Service 2" /> <h3>DONUT DESIGN</h3>{" "}
        </div>

       <div
          className="serviceBox"
          onMouseEnter={playVideo}
          onMouseLeave={pauseVideo}
        >
          <video
            ref={videoRef}
            src={JacketUI}
            muted
            loop
            playsInline
            className="serviceVideo"
          />                                                                
          <h3>JACKET DESIGN</h3>
        </div>

   
      </div>
    
  <div className="exploreBtnBox">
    <button className="exploreBtn" onClick={() => navigate("../recentWork")}>VIEW MORE!</button>
  </div>

    </div>
  );
}
