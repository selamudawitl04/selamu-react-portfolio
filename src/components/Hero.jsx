import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import yoni from "../assets/yoni.jpg";
import { yonaspic } from "../assets/index";
import LottieHero from "./LottieHero";
import { Icon } from "@iconify/react";
import { Tilt } from "react-tilt";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX}  flex flex-row justify-center `}>
        <div className="flex items-center mt-60 gap-x-40">
          <div className="flex flex-col justify-center h-full gap-y-16 ">
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi , I'm <span className="text-[#915eff]">Selamu</span>
              </h1>

              <p
                className={`text-base mt-2 w-[600px] text-secondary capitalize`}
              >
                <span className="text-[#915eff] font-medium">
                  Experienced Designer & Developer
                </span>{" "}
                who can provide your business a new creative start right away! Welcome! Make yourself at home as you explore. I'm a highly skilled Full Stack and Mobile App developer with a proven track record of tackling diverse and challenging projects. I excel in delivering seamless solutions tailored to your needs. From sleek mobile apps to robust web solutions, count on me as your trusted partner for Web and App Development. Turning ideas into clean code and problems into innovative solutions.
              </p>
            </div>
          </div>
          <div className="p-[2px] green-pink-gradient rounded-[20px]">
            <img
              src={yonaspic}
              alt=""
              className="shadow-card object-cover h-[550px] w-[450px] lg:mx-0 md:mx-20 rounded-[20px] "
            />
          </div>
        </div>
      </div>

      <div className="absolute flex items-center justify-center w-full xs:bottom-2 bottom-10">
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            ></motion.dev>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
