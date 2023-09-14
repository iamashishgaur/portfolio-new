import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center aligen-center">
      <MotionLink
        href="/"
        className="w-12 h-12  md:w-12 md:h-12 md:text-base bg-dark text-light flex items-center justify-center 
        rounded-full text-xl font-bold border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <img src="images/logo.png" alt="Ashish" width={35} />
      </MotionLink>
    </div>
  );
};

export default Logo;
