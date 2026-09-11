import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CV from "./pages/CV.jsx";
import Skills from "./pages/Skills.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<><Navbar /><Home /><Footer /></>} />

        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />

        <Route path="/cv" element={<><Navbar /><CV /><Footer /></>} />

        <Route path="/skills" element={<><Navbar /><Skills /><Footer /></>} />

        <Route path="/experience" element={<><Navbar /><Experience /><Footer /></>} />

        <Route path="/projects" element={<><Navbar /><Projects /><Footer /></>} />

        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);