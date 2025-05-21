import React, { useEffect, useRef } from "react";
import { technologies } from "../constants"; // Make sure it contains many items

const Tech = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 3; // pixels per tick
    const intervalTime = 16; // ~60 FPS
    let scrollInterval = null;

    // Start auto scroll
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!container) return;

        container.scrollLeft += scrollSpeed;

        // Loop back to start
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }, intervalTime);
    };

    startAutoScroll();

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="py-12 bg-[#0f1b2a] text-white w-full">
      <div className="text-center mb-8">
        <p className="text-sm text-gray-400">Technologies I Use</p>
        <h2 className="text-3xl font-bold">Tech Stack</h2>
      </div>

      <div
  ref={scrollRef}
  className="overflow-x-auto no-vertical-scroll scrollbar-hide whitespace-nowrap w-full"
  style={{ scrollBehavior: "smooth" }}
>

        <div className="inline-flex space-x-8 px-6">
          {[...technologies].map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex-none flex flex-col items-center bg-[#1a2b3c] rounded-xl p-6 w-[180px] shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 mb-3"
              />
              <p className="text-sm font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
