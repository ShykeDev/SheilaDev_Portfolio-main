import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-scroll";

import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <div className="fixed top-0 z-10 items-center justify-center hidden w-screen py-4 md:flex ">
        <nav className="max-w-screen-xl px-6 py-3 mx-auto shadow-lg bg-navbg rounded-xl shadow-sky-600/10">
          <ul className="flex items-center gap-14">
            <li>
              <Link to="hero" smooth spy offset={-80} className="menu-item">
                Home
              </Link>
            </li>

            <li>
              <Link to="skills" smooth spy offset={-80} className="menu-item">
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="experience"
                smooth
                spy
                offset={-80}
                className="menu-item"
              >
                Work Experience
              </Link>
            </li>

            <li>
              <Link to="about" smooth spy offset={-80} className="menu-item">
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth spy offset={-80} className="menu-item">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth spy offset={-80} className="menu-item">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="fixed top-0 right-0 z-50 p-3">
        <button
          onClick={toggleMenu}
          className="z-50 flex items-center justify-center ml-auto text-2xl border rounded w-11 h-11 text-sky-300 bg-blue-800/40 border-sky-900/80 backdrop-blur-lg md:hidden"
        >
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
