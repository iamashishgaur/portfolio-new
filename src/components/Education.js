import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Deatils = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mt-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col  justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} {<br />}
          {place}
        </span>
        <p className="font-medium w-full text-left flex md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="mt-60 md:mt-20">
        <h2
          ref={ref}
          className="font-bold text-8xl mb-32 w-full text-center  md:6xl xs:text-4xl md:mb-16"
        >
          Education
        </h2>
        <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute dark:bg-light left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4  ">
            <Deatils
              type="Master In Computer Application"
              time="2021 - 2023 "
              place="Krishna University"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering."
            />
            <Deatils
              type="Bachelor Of Science "
              time="2016 - 2019 "
              place="Allahabad State University"
              info="I have Completed my Bachelor of scienc degree in Physics."
            />
            <Deatils
              type="O Level "
              time="2018 - 2019 "
              place="National Institute of Electronics & Information Technology (Nielit)"
              info="I have Completed O Level (B Grade)."
            />
            <Deatils
              type="DIPLOMA IN FINANCIAL ACCOUNTING (DFA) "
              time="2016 - 2017 "
              place="Pune University"
              info="I have Completed my DIPLOMA IN FINANCIAL ACCOUNTING (DFA)."
            />
            <Deatils
              type="Relevel"
              time="2022 - 2023"
              place="Relevel By Unacadmey"
              info="Front End Development Relevel"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
