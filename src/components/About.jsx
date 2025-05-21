import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc";
import { yonaspic } from "../assets/index";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 1000,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>This is me</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 leading-[30px] flex flex-col lg:flex-row"
      >
        <img
          src={yonaspic}
          alt=""
          className="lg:mx-0 md:mx-20 rounded-xl object-contain shadow-card w-[420px]  h-full"
        />
        <div className="flex flex-col lg:ml-12 lg:mt-0 mt-8">
          <h3 className="text-[#38bdf8] text-xl font-semibold mb-2 italic">Experienced Designer & Developer who can provide your business a new creative start right a Way!</h3>
          <p className="text-secondary text-[17px] mb-4">
            I am a passionate, detail-oriented & committed individual with strong problem-solving capability, time management skills, and organizational skills.<br/><br/>
            I have successfully designed, developed, and deployed various web and  mobile applications , following clean coding practices in a test-driven development framework. With a deep passion for and top-notch expertise in web and app development, I am well-prepared to be a valuable asset to your team.<br/><br/>
            <span className="text-violet-400">Turning ideas into clean code and problems into innovative solutions.</span>
          </p>
          <div className="flex gap-10 text-center mt-4">
            <div>
              <span className="text-white text-4xl font-bold">40+</span>
              <div className="text-blue-400 text-sm">Project Done</div>
            </div>
            <div>
              <span className="text-white text-4xl font-bold">4+</span>
              <div className="text-blue-400 text-sm">Years Experience</div>
            </div>
            <div>
              <span className="text-white text-4xl font-bold">20+</span>
              <div className="text-blue-400 text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
