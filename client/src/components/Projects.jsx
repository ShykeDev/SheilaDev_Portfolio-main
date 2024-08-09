import React from "react";
import Project2 from "../assets/Project2.webp";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "../utils/motion";

const Projects = () => {
    return (
        <section className="max-w-screen-xl px-6 py-10 mx-auto" id="projects">
            <motion.h5 className="pb-10 text-2xl font-semibold text-center text-primary md:text-4xl md:text-left md:pb-14 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromLeft(0.3)}
            >
                Projects
            </motion.h5>

            <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-3" >

                <motion.div className="px-4 py-3 border rounded-lg bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800/40 md:px-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromLeft(0.5)}
                >
                    <img src={Project2} className="rounded-lg" alt={"project 2"} />
                    <p className="md:text-[18px] mt-3 font-semibold">
                        Sheila Project
                    </p>
                    <p className="mt-3 text-xs font-thin text-gray-100 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum temporibus voluptatum excepturi eligendi praesentium distinctio ducimus non sed, deleniti reprehenderit ea doloremque quam aspernatur obcaecati. Error commodi reiciendis laborum temporibus!
                    </p>
                </motion.div>
                <motion.div className="px-4 py-3 border rounded-lg bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800/40 md:px-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromLeft(0.7)}
                >
                    <img src={Project2} className="rounded-lg" alt={"project 2"} />
                    <p className="md:text-[18px] mt-3 font-semibold">
                        Sheila Project
                    </p>
                    <p className="mt-3 text-xs font-thin text-gray-100 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum temporibus voluptatum excepturi eligendi praesentium distinctio ducimus non sed, deleniti reprehenderit ea doloremque quam aspernatur obcaecati. Error commodi reiciendis laborum temporibus!
                    </p>
                </motion.div>
                <motion.div className="px-4 py-3 border rounded-lg bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800/40 md:px-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromLeft(0.9)}
                >
                    <img src={Project2} className="rounded-lg" alt={"project 2"} />
                    <p className="md:text-[18px] mt-3 font-semibold">
                        Sheila Project
                    </p>
                    <p className="mt-3 text-xs font-thin text-gray-100 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum temporibus voluptatum excepturi eligendi praesentium distinctio ducimus non sed, deleniti reprehenderit ea doloremque quam aspernatur obcaecati. Error commodi reiciendis laborum temporibus!
                    </p>
                </motion.div>

            </div>

        </section>
    );
};


export default Projects;
