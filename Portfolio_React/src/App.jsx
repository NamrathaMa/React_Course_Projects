import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="container">
        <Intro />
        <About />
        <Experience></Experience>
        <Education></Education>
        <Projects></Projects>
        <Contact />
      </main>
      <footer>
        <div className="container">
          <p>Designed and built by Namratha Manikonda · 2026</p>
        </div>
      </footer>
    </>
  );
}

export default App;
