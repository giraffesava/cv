import React from "react";
import "./styles.scss";
import { Routes, Route } from "react-router-dom";
import AboutMe from "../NavigationMenu/AboutMe/inbox";
import HardSkills from "../NavigationMenu/HardSkills";
import SoftSkills from "../NavigationMenu/SoftSkills";
import Experience from "../NavigationMenu/Experience";

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
