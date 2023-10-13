import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Education from "../components/Education";
// import Experiecne from "../components/Experiecne";
import TransitionEffact from "../components/TransitionEffact";
import Meta from "../components/Meta";
import { SkillData } from "../data/skilldata";
import { AnimatedNumbers } from "../components/AnimatedNumbers";

const About = () => {
  return (
    <>
      <Meta title="About Us" />
      <TransitionEffact />
      <main
        className={`flex w-full flex-col items-center justify-center dark:text-light `}
      >
        <Layout className="pt-20">
          <AnimatedText
            text="Mr. Ashish Kumar Intro."
            className="mb-16 lg:!text-6xl sm:!text-6xl  xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-ful grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Introduction
              </h2>
              <p className="font-medium leading-7 tracking-wide md:text-justify ">
                - Hi, Ashish Kumar, Highly skilled frontend developer in
                creating user-friendly and responsive web interfaces. HTML, CSS,
                Styled Components, Sass, Tailwind CSS, and Bootstrap 5,
                React.js, Node.js, Mongo DB, Basic Adept at collaborating with
                Cross-functional teams to deliver user- Focused solutions that
                meet business goals.
              </p>
              <p className=" my-4 font-medium leading-7 tracking-wide md:text-justify ">
                I believe that design is about more than just making things look
                pretty about solving problems and creating intuitive, enjoyable
                experiences for users.
              </p>
              <p className="font-medium leading-7 tracking-wide md:text-justify ">
                Whether working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light 
            xl:col-span-4 md:order-1 md:col-span-8
            "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <img
                src="images/profile/ashish.jpg"
                alt="ashish Kumar"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="{max-width:768px} 100vw ,{max-width:1200px} 50vw,33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-evenly md:justify-between  xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-8xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Project Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-8xl sm:text-2xl xs:text-4xl">
                  <AnimatedNumbers value={1} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Year
                </h2>
              </div>
            </div>
          </div>
          <div className="col-span-6 px-7 mt-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              Frontend Development Technology
            </h2>
            <ul className="Bullet">
              {SkillData.map((item, index) => {
                return (
                  <li key={index}>
                    <h2 className=" text-lg font-semibold">{item.title}:</h2>
                    <p className="font-normal  leading-7 tracking-wide md:text-justify ">
                      {item.details}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <Skills />
          <Education />
          {/* <Experiecne /> */}
        </Layout>
      </main>
    </>
  );
};

export default About;
