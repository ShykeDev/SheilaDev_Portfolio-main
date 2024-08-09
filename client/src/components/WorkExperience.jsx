import React from "react";
import { WORK_EXPERIENCE } from "../utils/data";
import BG_GRADIENT from "../assets/bg-gradient-1.png";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

const WorkExperience = () => {
  return (
    <section
      className="relative max-w-screen-xl px-6 pb-0 mx-auto md:pb-20 md:px-20"
      id="experience"
    >
      <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(1)}>
        <img
          src={BG_GRADIENT}
          className="w-[60vw] absolute -left-72 -top-56 aspect-square"
        />

        <div class="ui-circle absolute bottom-6 md:-bottom-24 -right-10 md:-right-8 rotate-45"></div>

        <h5 className="text-2xl font-semibold text-center text-primary md:text-3xl pb-14 md:pb-4">
          Work Experience
        </h5>

        {WORK_EXPERIENCE.map((item, index) => (
          <WorkExperienceCard
            key={item.company}
            index={index}
            company={item.company}
            position={item.position}
            duration={item.duration}
            description={item.description}
            isLast={WORK_EXPERIENCE.length === index + 1}
          />
        ))}
      </motion.div>

    </section>
  );
};

const WorkExperienceCard = ({
  company,
  position,
  duration,
  description,
  index,
  isLast,
}) => {
  return (
    <div className="relative">
      <div
        className={`hidden md:block h-[140px] border-b 
          ${index > 0 ? "min-w-96 border-l" : " ml-auto w-40"} 
          ${isLast ? "w-40 mr-auto" : ""} border-blue-500 border-dashed`}
      />

      {!isLast && (
        <div className="hidden md:block min-w-96 h-[140px] border-r border-b border-blue-500 border-dashed" />
      )}

      <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 mx-0 md:mx-10 md:absolute top-[70px] mb-6 md:mb-0">
        <div className="flex items-center justify-between flex-1">
          <div>
            <p className="text-white text-[13.5px] md:text-base font-medium leading-4 md:leading-5">
              {company}
            </p>
            <span className="text-xs text-blue-400">{position}</span>
          </div>

          <div className="text-sky-200 text-[11px] md:text-xs font-medium bg-blue-950 rounded border border-blue-700/50 border-dashed justify-center items-center px-4 py-2">
            {duration}
          </div>
        </div>

        <p className="mt-5 text-xs font-thin leading-5 text-blue-50">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
