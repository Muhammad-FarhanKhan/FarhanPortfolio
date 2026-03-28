import img2 from "../../image/Myimage1.png";
import Typewriter from "../../components/Typewriter";
import "../../style/about.css"

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about_container">
        <div className="leftSide ">
          <h2>Hello I'm</h2>
          <h1>WEB DEVELOPER + UX DESIGNER</h1>

          <div className="intro_text">
            <Typewriter
              text={`Fuull Stack Developer with expertise in Frontend, Backend, and Database Development. I design and build modern, responsive, and user-friendly web applications. With a strong understanding of UI/UX design, I focus on creating seamless digital experiences that combine functionality with clean and engaging design.`}
              speed={10}
            />
          </div>
          <div className="stats">
  <div className="stat">
    <h2>3+</h2>
    <p>Years Experience</p>
  </div>
  <div className="stat">
    <h2>10+</h2>
    <p>Projects Completed</p>
  </div>
</div>
        </div>

        <div className="rightSide">
          <img src={img2} alt="Profile" />
        </div>
      </div>
    </section>
  );
}
