import React from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import TransitionEffact from "../components/TransitionEffact";
import Meta from "../components/Meta";
import { FeatursProjects } from "../components/FeatursProjects";

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
