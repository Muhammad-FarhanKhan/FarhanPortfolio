import "../../style/service.css";
import videoeditor from "../../image/VideoEditor.jpeg"
import uiux from "../../image/earnByKnowledge.png"
import webDevelop from "../../image/Donut Website UI1.png"
import JacketUI from "../../video/JacketUI.mp4";
import { useRef } from "react";


export default function RecentWork() {

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
        {" "}
        <div className="serviceBox">
          {" "}
          <img src={uiux} alt="Service 1" /> <h3>EARN BY KNOWLEDGE</h3>{" "}
        </div>{" "}
        <div className="serviceBox">
          {" "}
          <img src={webDevelop} alt="Service 2" /> <h3>STRAWBERRY DONUT</h3>{" "}
        </div>{" "}
   
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
          <h3>JACKET UI</h3>
        </div>

   
      </div>
    
  <div className="exploreBtnBox">
    <button className="exploreBtn">EXPLORE MORE!</button>
  </div>

    </div>
  );
}
