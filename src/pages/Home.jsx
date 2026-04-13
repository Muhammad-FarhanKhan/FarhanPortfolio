import Navbar from "../components/home/Navbar";
import About from "../components/home/about";
import WorkProcess from "../components/home/workProcess";
import Skills from "../components/home/skills";
import Testimonials from "../components/home/reviews";
import Footer from "../components/home/footer";
import RecentWork from "../components/home/recentWork";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <WorkProcess />
      <Skills />
      <RecentWork />
      <Testimonials />
      <Footer />
    </>
  );
}