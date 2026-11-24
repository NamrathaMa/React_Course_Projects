import Header from "./components/Header.tsx";
import Intro from "./components/Intro.tsx";
import Ribbon from "./components/Ribbon.tsx";
import PillarSection from "./components/PillarSection.tsx";
import Programs from "./components/Programs.tsx";
import Schedule from "./components/Schedule.tsx";
import Footer from "./components/Footer.tsx";
import Testimonials from "./components/Testimonials.tsx";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Ribbon />
      <PillarSection />
      <Programs />
      <Testimonials />
      <Schedule />
      <Footer />
    </>
  );
}

export default App;
