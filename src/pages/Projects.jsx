import React from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import { GithubIcon } from "../components/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TransitionEffact from "../components/TransitionEffact";
import Meta from "../components/Meta";

const FeatursProjects = ({ type, title, summary, img, to, github }) => {
  return (
    <article
      className="w-full p-12 dark:border-light flex items-center relative   justify-between rounded-3xl border border-solid border-dark bg-light shadow-2x1 rounded-br-2x1 dark:bg-dark 
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3x1 dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        to={to}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-auto "
          priority
          sizes="{max-width:768px} 100vw ,{max-width:1200px} 50vw,50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-center justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          to={to}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="my-2 flex gap-10 items-center">
          <Link to={github} target="_blank" className="w-10">
            <GithubIcon className=" dark:text-primaryDark" />
          </Link>
          <Link
            to={to}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6  text-lg font-semibold dark:bg-light dark:text-dark
            hover:dark:bg-dark hover:dark:text-light
            hover:dark:border-light  border-2 border-solid border-transparent hover:border-dark sm:px-2 sm-text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

// const Project = ({ title, type, img, link, github }) => {
//   return (
//     <article className="w-ful flex  flex-col items-center justify-center rounded-2xl border border-dark border-solid bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
//       <div
//         className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3x1 dark:bg-light
//       md:-tight-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]

//       "
//       />
//       <Link
//         href={link}
//         target="_blank"
//         className="w-full  cursor-pointer overflow-hidden rounded-lg "
//       >
//         <Image src={img} alt={title} className="w-full h-auto " />
//       </Link>

//       <div className="w-full flex flex-col items-center justify-between mt-4">
//         <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
//           {type}
//         </span>
//         <Link
//           href={link}
//           target="_blank"
//           className="hover:underline underline-offset-2 dark:text-light "
//         >
//           <h2
//             className="my-2 w-full text-left text-3xl font-bold
//           lg:text-2xl
//           "
//           >
//             {title}
//           </h2>
//         </Link>

//         <div className="my-2 flex  justify-between">
//           <Link href={github} target="_blank" className="w-8 md:w-10 ">
//             <GithubIcon className=" dark:text-primaryDark" />
//           </Link>
//           <Link
//             href={link}
//             target="_blank"
//             className="ml-4 rounded-lg bg-dark text-light p-2 px-6 dark:bg-light dark:text-dark border border-solid hover:dark:bg-dark hover:dark:text-light text-lg font-semibold md:text-base"
//           >
//             <LinkArrow />
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };

const Projects = () => {
  return (
    <>
      <Meta title="My Projects" />
      <TransitionEffact />
      <main className="w-full  flex flex-col items-center justify-center">
        <Layout>
          <AnimatedText
            text="Projects Overview !"
            className="m-12 lg:!text-50xl sm:mb-4 sm:!text-4xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-16  xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <motion.div
              className="col-span-12"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FeatursProjects
                title="Our Portfolio"
                img="images/projects/portfolio.png"
                summary="Our Portfolio is a web application built using React.js, JavaScript, styled-components,  HTML, CSS, and Tailwind CSS. "
                to="https://ashishgaur.co.in/"
                github="https://github.com/iamashishgaur/portfolio-new"
                type="Featurs Project"
              />
            </motion.div>
            <motion.div
              className="col-span-12"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FeatursProjects
                title="Pristore Mern E-Commerce"
                img="images/projects/pristore.png"
                summary="Our Modern E-Commerce Platform is a web application built using React.js, JavaScript, styled-components, MongoDB, Express.js, HTML, CSS, and Bootstrap 5. It aims to provide users with a seamless online shopping experience, combining a visually appealing user interface."
                to="/"
                github="https://github.com/iamashishgaur/pristore-frontend"
                type="Featurs Project"
              />
            </motion.div>
            <motion.div
              className="col-span-12"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FeatursProjects
                title="SKYmovie.com"
                img="images/projects/skymovie.png"
                summary="This is the Movie web application , i am using IMDB api and fetch the latest movie ."
                to="https://skymovies-new.netlify.app/"
                github="https://github.com/iamashishgaur/skymovie"
                type="Featurs Project"
              />
            </motion.div>
            <div className="col-span-12">
              <FeatursProjects
                title="E-com Shopping "
                img="images/projects/ecomapp.jpg"
                summary="Our Modern E-Commerce Platform is a web application built using React.js, JavaScript, styled-components,  HTML, CSS, . "
                to="https://dheerushop.netlify.app/"
                github="https://github.com/iamashishgaur/dheeru-e-com"
                type="Featurs Project"
              />
            </div>

            <div className="col-span-12">
              <FeatursProjects
                title="Weather App"
                img="images/projects/wetherapp.jpg"
                summary="A feature-rich Weather App App using React, Sass CSS, React Router and Recharts. 
                It shows detail regarding almost all the Weather App  App."
                to="https://wetherappashish.netlify.app/"
                github="https://github.com/iamashishgaur/Weatherapp"
                type="Featurs Project"
              />
            </div>
            {/* <div className="col-span-6 md:col-span-12">
              <Project
                title="Weather App"
                img={project2}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency"
                link="https://wetherappashish.netlify.app/"
                github="/"
                type="Featurs Project"
              />
            </div> */}
            {/* <div className="col-span-6 md:col-span-12">
              <Project
                title="Weather App"
                img={project2}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency"
                link="https://wetherappashish.netlify.app/"
                github="/"
                type="Featurs Project"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
