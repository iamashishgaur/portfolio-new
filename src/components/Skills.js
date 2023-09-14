import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light

      lg:py-3 lg:px-4 md:text-sm  md:py-1.5 md:px-3 xl:bg-transparent xs:dark:bg-transparent
      xs:text-dark xs:dark:text-light xs:font-bold
      "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-60 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen flex relative rounded-full items-center justify-center bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-4 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{
            backgroundColor: [
              "#121212",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#121212",
            ],
            transition: { duration: 1, scale: 1.05, repeat: Infinity },
          }}
        >
          web
        </motion.div>
        <Skill name="HTML" x="-27vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="24vw" y="8vw" />
        <Skill name="Mongo DB" x="-16vw" y="-3vw" />
        <Skill name="React.jS" x="8vw" y="14vw" />
        <Skill name="Next.js" x="-20vw" y="-15vw" />
        <Skill name="Node.js" x="14vw" y="-10vw" />
        <Skill name="Scss" x="10vw" y="6vw" />
        <Skill name="Style Components" x="25vw" y="-2vw" />
        <Skill name="Python" x="-15vw" y="12vw" />
        <Skill name="Figma" x="25vw" y="-10vw" />
        <Skill name="Tailwind CSS" x="5vw" y="-18vw" />
      </div>
    </>
  );
};

export default Skills;
