import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { LinkArrow } from "../components/icons";
import Hireme from "../components/Hireme";
import TransitionEffact from "../components/TransitionEffact";
export default function Home() {
  return (
    <>
      <TransitionEffact />
      <main className="flex items-center text-dark w-full  dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8 h-[calc(100vh_-_110px)]">
          <div className="flex items-center gap-6 mt-16 md:mt-0 justify-between w-full lg:flex-col ">
            <div
              className="IMGSIze col-span-3 w-50 ml:10 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light 
            xl:col-span-2 md:col-span-8
            "
            >
              <div className="absolute top-0   -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <img
                src="/images/profile/ashish.jpg"
                alt="ashish Kumar"
                className="w-full md:w-full h-auto rounded-2xl"
                priority
                sizes="{max-width:768px} 100vw ,{max-width:1200px} 50vw,33vw"
              />
            </div>
            <div className="w-1/2 flex md:mt-8  flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Ashish Kumar"
                className="!text-6xl md:mt-0 md:text-center  xl:!text-5xl lg:text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <p className="md:my-4 my-10  leading-7 tracking-wide md:text-justify  font-medium md:text-sm sm:text-sm">
                - I am a highly skilled and motivated frontend developer with
                expertise in building dynamic and responsive web applications
                using React.js, JavaScript, and a strong foundation in HTML,
                CSS, Styled Components, Sass, Tailwind CSS, and Bootstrap 5.
                With a passion for creating intuitive and visually appealing
                user interfaces, I excel in crafting seamless user experiences
                that drive engagement and satisfaction.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  to="/Ashish Kumar  Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                font-semibold hover:bg-light hover:text-dark  border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark
                hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light
                md:p-2 md:px-4 md:text-base
                "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-2"} />
                </Link>
                <Link
                  to="mailto:"
                  target={"_blank"}
                  className=" p-2.5 px-8 text-light rounded-lg text-lg bg-dark hover:bg-light hover:text-dark border-2 border-solid border-transparent ml-8 hover:border-dark capitalize font-medium dark:bg-light dark:text-dark  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-8 md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div className="absolute right-40 bottom-0 inline-block w-24 md:hidden">
          <Hireme />
        </div>
      </main>
    </>
  );
}
