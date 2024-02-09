import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// TechItem component to render each technology with styled div
const SkillItem = ({ icon }) => {
  return (
    <div
      className="w-28 h-28 flex justify-center items-center rounded-full border border-gray-300"
      style={{ background: "lightgray" }} // Add your desired styling here
    >
      {/* Render technology icon here */}
      <img src={icon} alt="Technology Icon" className="w-16 h-16" />
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* Map over technologies array and render TechItem for each technology */}
      {technologies.map((technology, index) => (
        <SkillItem key={index} icon={technology.icon} />
      ))}
    </div>
  );
};

export default SectionWrapper(Skills, "");
