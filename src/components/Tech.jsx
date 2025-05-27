import React from "react";
import Marquee from "react-fast-marquee";
import { technologies } from "../constants"; // Your tech list

const Tech = () => {
  return (
    <section className="py-12 bg-[#0f1b2a] text-white w-full ">
      <div className="text-center mb-8">
        <p className="text-sm text-gray-400">Technologies I Use</p>
        <h2 className="text-3xl font-bold">Tech Stack</h2>
      </div>

      <Marquee
        speed={80} 
        gradient={false}
        pauseOnHover={true}
        className="px-6 scrollbar-hide"
      >
        {technologies.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex flex-col items-center bg-[#1a2b3c] rounded-xl p-6 w-[180px] shadow-lg mx-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 mb-3"
            />
            <p className="text-sm font-medium text-center">{tech.name}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Tech;

