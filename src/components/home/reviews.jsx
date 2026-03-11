import { FaStar } from "react-icons/fa";
import client1 from "../../image/logo.jpeg";
import client2 from "../../image/logo.jpeg";
import client3 from "../../image/logo.jpeg";
import client4 from "../../image/logo.jpeg";

import "../../style/reviews.css"

export default function Testimonials() {

  const testimonials = [
    {
      name: "Michael Johnson",
      company: "TechNova",
      image: client1,
      message:
        "Farhan did an amazing job designing our UI/UX. The interface is clean, modern, and extremely user-friendly."
    },
    {
      name: "Sarah Williams",
      company: "Creative Studio",
      image: client2,
      message:
        "Excellent web development skills! The website he built is fast, responsive, and works perfectly on all devices."
    },
    {
      name: "David Brown",
      company: "Startup Hub",
      image: client3,
      message:
        "Farhan delivered our React project ahead of schedule. His code quality and attention to detail are impressive."
    },
    {
      name: "Emma Taylor",
      company: "DesignLab",
      image: client4,
      message:
        "His UI design sense is outstanding. The layouts, color combinations, and user experience are top-notch."
    },
    {
      name: "James Anderson",
      company: "WebSolutions",
      image: client1,
      message:
        "Professional developer with strong backend skills. Our PHP and MySQL system runs smoothly thanks to him."
    },
    {
      name: "Olivia Martinez",
      company: "Digital Agency",
      image: client2,
      message:
        "Very creative and reliable. Farhan transformed our ideas into a beautiful and functional website."
    },
    {
      name: "Daniel Wilson",
      company: "InnovateX",
      image: client3,
      message:
        "Great communication and problem-solving skills. Working with him was a fantastic experience."
    },
    {
      name: "Sophia Clark",
      company: "BrandCraft",
      image: client4,
      message:
        "The UI/UX improvements he suggested significantly increased our user engagement."
    }
  ];

  return (
    <section className="testimonial_section">
      <h2>WHAT MY CLIENT SAY!</h2>

      <div className="slider">
        <div className="slider_track">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div className="testimonial_card" key={index}>

              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>

              <div className="client_info">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.company}</span>
                </div>
              </div>

              <p className="message">{item.message}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}