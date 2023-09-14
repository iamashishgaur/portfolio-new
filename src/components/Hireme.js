import { Link } from "react-router-dom";
import React from "react";
import { CircularText } from "./icons";

const Hireme = () => {
  return (
    <div className="fixd left-4 bottom-4 lg:hidden flex items-center justify-center overflow-hidden absolute md:right-8 md:hidden md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-40 h-auto flex items-center justify-center relative animate-spin-slow md:w-24">
        <CircularText className={"fill-dark dark:fill-light"} />

        <Link
          to="mailto:"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-16 h-16 rounded-full  hover:text-dark hover:bg-light  dark:bg-light dark:text-dark
                hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light
                md:w-12 md:h-12 md:text-[10px]
                "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
