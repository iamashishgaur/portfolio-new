import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./icons";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ to, title, className = " " }) => {
  const location = useLocation();

  return (
    <Link to={to} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${location.pathname === to ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = " ", toggle }) => {
  const location = useLocation();
  const handleClick = () => {
    toggle();
    location.pathname(href);
  };
  return (
    <Link
      to={href}
      className={`${className} relative group text-light dark:text-dark mt-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${location.pathname === href ? "w-full" : "w-0"} dark:bg-dark`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="w-full px-32  py-5 font-medium flex items-center justify-between dark:text-dark relative z-10 lg:px-16 md:px-12 sm:px-8">
        <button
          className=" flex-col justify-center items-center hidden lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
              open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
              open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
            <CustomLink to="/" title="Home" className="mr-4" />
            <CustomLink to="/about" title="About" className="mx-4" />
            <CustomLink to="/project" title="Projects" className="mx-4" />
          </nav>

          <nav className="flex justify-center items-center flex-wrap  ">
            <motion.a
              href="https://www.linkedin.com/iamashishgaur"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.twitter.com/iamashishgaur"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://www.github.com/iamashishgaur"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark"
            >
              <GithubIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light  text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>
        {open ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col  justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-20
      
      "
          >
            <nav className="flex items-center text-start flex-col justify-center gap-2">
              <CustomMobileLink
                href="/"
                title="Home"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/project"
                title="Projects"
                className=""
                toggle={handleClick}
              />
            </nav>

            <nav className="flex justify-center items-center flex-wrap mt-3">
              <motion.a
                href="www.linkedin.com/iamashishgaur/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3 sm:mx-1"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="https://www.twitter.com/iamashishgaur"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href="https://www.github.com/iamashishgaur"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark rounded-ful"
              >
                <GithubIcon />
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                  mode === "light"
                    ? "bg-dark text-light"
                    : "bg-light  text-dark"
                }`}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </motion.div>
        ) : null}

        <div className="absolute left-[50%] md:left-[85%] translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default Navbar;
