import aboutPic from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className="text-center text-4xl my-10 sm:my-20"
      >
        About Me
      </motion.h2>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
              viewport={{ once: true }}
              src={aboutPic}
              alt="about"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w1/2">
          <div className="flex lg:justify-end">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
              viewport={{ once: true }}
              className="max-w-xl font-light tracking-tight"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
