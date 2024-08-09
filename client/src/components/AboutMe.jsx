import React from "react";
import { ABOUT_ME_DATA } from "../utils/data";

import PROFILE_PIC from "../assets/Mpic.png";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

const AboutMe = () => {
  return (
    <section className="max-w-screen-xl px-6 py-10 mx-auto md:py-16" id="about">
      <motion.h5 className="pb-10 text-2xl font-semibold text-center text-primary md:text-4xl md:text-left md:pb-14 " initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.3)}>
        About Me
      </motion.h5>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <motion.div className="col-span-1 border rounded-lg bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800/40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}>
          <img className="object-fill w-full p-4 mb-4 rounded-lg h-100 md:mb-0" src={PROFILE_PIC} alt="profile pic" />

        </motion.div>
        <motion.div className="col-span-2 p-6 border rounded-lg bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800/40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.5)}
        >
          <p className="text-blue-50 text-xs md:text-[18px] leading-6">
            {ABOUT_ME_DATA.introduction} {ABOUT_ME_DATA.background}{" "}
            {ABOUT_ME_DATA.interests}
          </p>

          <br />

          <p className="text-blue-50 text-xs md:text-[18px] leading-6">
            {ABOUT_ME_DATA.skills} {ABOUT_ME_DATA.careerGoals}
          </p>
        </motion.div>
      </div>

      <motion.div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-3" initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.7)}>
        <InfoCard
          count={ABOUT_ME_DATA.stats.yearsOfExperience}
          lable="Years of Experience"
        />

        <InfoCard
          count={ABOUT_ME_DATA.stats.numberOfProjects}
          lable="Projects Completed Successfully"
        />

        <InfoCard
          count={ABOUT_ME_DATA.stats.certificationsEarned}
          lable="Certifications Earned"
        />
      </motion.div>
    </section>
  );
};

const InfoCard = ({ lable, count }) => {
  return (
    <div className="px-4 py-3 border rounded-lg bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800/40 md:px-6">
      <h6 className="text-xl font-semibold text-primary md:text-2xl">
        {count}
      </h6>

      <span className="text-xs font-thin text-blue-300 md:text-sm">
        {lable}
      </span>
    </div>
  );
};

export default AboutMe;
