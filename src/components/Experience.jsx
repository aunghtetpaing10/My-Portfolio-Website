import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className="text-center text-4xl my-10 sm:my-20"
      >
        Experience
      </motion.h2>
      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="flex flex-wrap lg:justify-center mb-8">
          <div className="w-full lg:w-1/4">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
              className="mb-2 text-sm text-neutral-400"
            >
              {experience.year}
            </motion.p>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 ,delay: 0.5 } }}
            viewport={{ once: true }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h3 className="font-semibold mb-2">
              {experience.role} -{" "}
              <span className="text-sm">{experience.company}</span>
            </h3>
            <p className="text-gray-400 font-light">{experience.description}</p>
            <div className="flex items-center flex-wrap gap-x-4">
              {experience.technologies.map((technology, index) => (
                <div
                  key={index}
                  className="mt-4 text-purple-800 py-1 px-2 bg-neutral-900 rounded text-sm font-medium"
                >
                  {technology}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
