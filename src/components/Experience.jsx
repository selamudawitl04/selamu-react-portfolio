import React from "react";
import { experiences, education } from "../constants";
import { styles } from "../styles";
import SectionWrapper from "../hoc";

const TimelineList = ({ data }) => (
  <div className="space-y-8 relative pl-6 border-l border-dotted border-cyan-500">
    {data.map((item, idx) => (
      <div key={idx} className="relative group">
        {/* Yellow dot - changes color and scales on card hover */}
        <div className="absolute -left-8 top-0 w-4 h-4 rounded-full border-2 border-white z-10 bg-[#915eff] transition-all duration-300 group-hover:bg-cyan-400 group-hover:scale-110" />

        {/* Card */}
        <div className="border-2 border-dotted border-cyan-500 p-4 rounded-md bg-[#131e33] transition duration-300 group-hover:shadow-md group-hover:border-solid">
          <p className="text-sm text-gray-400 mb-1">{item.date}</p>
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          {(item.company_name || item.subtitle) && (
            <p className="text-cyan-300 font-semibold text-sm mb-1">
              {item.company_name || item.subtitle}
            </p>
          )}
          {item.location && (
            <p className="text-sm text-gray-300 mb-2">{item.location}</p>
          )}
          {item.points && (
            <ul className="list-disc text-gray-200 text-sm ml-4 space-y-1">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}
  </div>
);

const ExperienceSection = () => {
  return (
    <section className="bg-[#0f1b2a] py-16 px-6 md:px-20 text-white">
      <div className="text-center mb-12">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience & Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Work Experience
          </h3>
          <TimelineList data={experiences} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Education
          </h3>
          <TimelineList data={education} />
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(ExperienceSection, "experience");
