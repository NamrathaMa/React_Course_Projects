import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar.jsx";
import BoardPage from "./pages/BoardPage.jsx";
import NewJobPage from "./pages/NewJobPage.jsx";
import JobDetailPage from "./pages/JobDetailPage.jsx";
import StatsPage from "./pages/StatsPage.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="page">
        <Routes>
          <Route path="/" element={<BoardPage />} />
          <Route path="/jobs/new" element={<NewJobPage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
