import { Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { SelectedWorks } from "./pages/SelectedWorks";
import { Certifications } from "./pages/Certifications";
import { Navbar } from "./pages/Navbar";
import { TechStack } from "./pages/TechStack";
import Experience from "./pages/Experience";

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}> {/* offset for fixed navbar, responsive via media queries */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<SelectedWorks />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
    </>
  );
}
