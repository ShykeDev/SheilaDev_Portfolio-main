import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { MdOutlineBadge } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PROFILE_DATA } from "../utils/data";
import { motion } from "framer-motion"
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

import PROFILE_PIC from "../assets/Mpic.png";

const Hero = () => {
  const {
    name,
    tagline,
    jobTitle,
    yearsOfExperience,
    location,
    email,
    skills,
  } = PROFILE_DATA;

  return (
    <section
      className="flex flex-col max-w-screen-xl px-6 pt-16 pb-20 mx-auto gap-14 md:flex-row md:items-center md:pt-28"
      id="hero"
    >
      <motion.div className="flex-1 text-center md:text-left z-[1]" initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.5)}>
        <span className="text-xs font-thin text-blue-400 md:text-sm">
          A Software Developer Developer
        </span>

        <h2 className="mt-3 text-3xl md:text-5xl md:mt-5">{name} 👋</h2>

        <p className="w-full text-xs font-light text-neutral-50 leading-5 my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-8">
          {tagline}
        </p>

        <button className="primary-btn">Contact Me</button>
      </motion.div>

      <motion.div className="flex gap-2 justify-center md:gap-3 lg:gap-5 z-[1]" initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(1)}>
        <div className="w-[403px] bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-950 p-6">
          <div className="flex items-center justify-center rounded-full top-10">
            <div className="h-48 overflow-hidden bg-blue-600 rounded-full w-44">
              <img className="object-cover m-auto mt-2 h-52" src={PROFILE_PIC} alt="img one" />
            </div>
          </div>

          <div className="p-4 mt-3 text-center rounded-md bg-cardbg">
            <h5 className="text-sm text-white md:text-base">{name}</h5>
            <p className="mt-1 text-xs text-slate-400 md:font-medium">
              {jobTitle}
            </p>

            <div className="flex items-center justify-center gap-2 mt-1 text-xs text-slate-300">
              <HiOutlineLocationMarker />
              <p className="font-medium">{location}</p>
            </div>
          </div>

          <InfoTile
            icon={<FiMail size={20} className="text-sky-400" />}
            text={email}
          />

          <InfoTile
            icon={<MdOutlineBadge size={22} className="text-sky-400" />}
            text={`${yearsOfExperience} Years of Experience`}
          />

          <div className="flex flex-wrap items-center gap-2 my-3">
            {skills.map((item) => (
              <div
                key={item}
                className="text-[11px] bg-blue-800/30 rounded md:text-xs px-3 py-1 "
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="p-2 rounded bg-blue-800/30">
              <FaGithub className="text-lg md:text-xl" />
            </div>

            <div className="p-2 rounded bg-blue-800/30">
              <FaLinkedin size={20} />
            </div>

            <div className="p-2 rounded bg-blue-800/30">
              <FaXTwitter size={20} />
            </div>
          </div>
        </div>
      </motion.div>

      <div class="ui-circle absolute top-6 md:top-10 -left-10 md:left-0"></div>
    </section>
  );
};

export default Hero;

const InfoTile = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 p-4 mt-3 rounded-md bg-cardbg">
      {icon}
      <p className="text-xs font-normal md:text-sm">{text}</p>
    </div>
  );
};
