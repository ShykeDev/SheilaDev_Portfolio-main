import React from "react";
import { IoMdMail } from "react-icons/io";
import { PROFILE_DATA } from "../utils/data";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

const Contact = () => {
  return (
    <section className="max-w-screen-xl px-6 pb-20 mx-auto md:py-24" id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.3)}
      >
        <h5 className="pb-8 text-2xl font-semibold text-center text-primary md:text-4xl md:pb-14 ">
          Contact
        </h5>

        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-16">
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={PROFILE_DATA.email} />

            <ContactInfoCard
              icon={<IoPhonePortraitOutline />}
              text={PROFILE_DATA.phone}
            />

            <ContactInfoCard
              icon={<MdOutlineWeb />}
              text={PROFILE_DATA.website}
            />
          </div>

          <div>
            <h5 className="pb-5 mt-4 text-lg font-medium md:hidden text-cyan-300">
              Contact Form
            </h5>
            <form className="flex flex-col">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                id=""
                className="input-box"
                autoComplete="off"
              />

              <input
                type="text"
                name="email"
                placeholder="Email"
                id=""
                className="input-box"
                autoComplete="off"
              />

              <textarea
                name="message"
                placeholder="Message"
                id=""
                rows="3"
                className="input-box"
                autoComplete="off"
              ></textarea>

              <button className="primary-btn">SUBMIT</button>
            </form>
          </div>
        </div>

      </motion.div>

    </section>
  );
};

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 px-4 py-3 mb-5 border rounded bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800/40">
      <div className="flex items-center justify-center w-10 h-10 text-xl border rounded text-cyan-300 bg-sky-950 border-cyan-700 ">
        {icon}
      </div>

      <p className="text-xs text-cyan-100 md:text-sm">{text}</p>
    </div>
  );
};

export default Contact;
