import Header from "./components/Header.tsx";
import Intro from "./components/Intro.tsx";
import Ribbon from "./components/Ribbon.tsx";

import "./App.css";
import PillarSection from "./components/PillarSection.tsx";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Ribbon />
      <PillarSection />
    </>
  );
}

export default App;
