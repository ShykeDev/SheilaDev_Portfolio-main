import React from "react";
import { SKILLS } from "../utils/data";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

const Skills = () => {
  return (
    <motion.section
      className="max-w-screen-xl px-6 pb-20 mx-auto md:py-24"
      id="skills"
    >
      <motion.div
        className="p-4 border rounded-lg bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800/40 md:p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.3)}
      >
        <h5 className="mb-5 text-xl font-medium">Skills</h5>

        <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {SKILLS.map((skill, index) => (
            <SkillsCard
              key={skill.id}
              icon={skill.icon}
              iconProps={skill.iconProps}
              title={skill.title}
              comment={skill.comment}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const SkillsCard = ({ icon: Icon, iconProps, title, comment, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="p-5 border border-blue-900 rounded bg-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
    >
      <div className="flex items-center justify-between mb-5">
        <p className="text-base">{title}</p>
        <Icon className="text-3xl text-primary" {...iconProps} />
      </div>

      <p className="text-xs font-light leading-5 opacity-80">{comment}</p>
    </motion.div>
  );
};

export default Skills;
