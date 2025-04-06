import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import AboutPage from "./pages/AboutPage";
import CompetitionPage from "./pages/CompetitionPage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout"; // ✨ חדש
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<FormPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/competition" element={<CompetitionPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
