import React from "react";
import "./styles.scss";
import { Routes, Route } from "react-router-dom";
import AboutMe from "../NavigationMenu/AboutMe/AboutMe";
import HardSkills from "../NavigationMenu/HardSkills/HardSkills";
import SoftSkills from "../NavigationMenu/SoftSkills/SoftSkills";
import Experience from "../NavigationMenu/Experience/Experience";

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="hard-skills" element={<HardSkills />} />
        <Route path="soft-skills" element={<SoftSkills />} />
        <Route path="experience" element={<Experience />} />
      </Routes>
    </div>
  );
};

export default Content;
