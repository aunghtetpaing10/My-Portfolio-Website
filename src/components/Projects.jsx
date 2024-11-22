import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className="my-10 sm:my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
              src={project.image}
              alt={project.title}
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </div>
          <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 ,delay: 0.5 } }}
          viewport={{ once: true }}
          className="w-full lg:w-3/4">
            <h3 className="mb-2 font-semibold">{project.title}</h3>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            <div className="flex items-center flex-wrap gap-x-4">
              {project.technologies.map((technology, index) => (
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

export default Projects;
