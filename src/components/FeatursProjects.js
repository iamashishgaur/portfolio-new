import { Link } from "react-router-dom";
import { GithubIcon } from "./icons";

export const FeatursProjects = ({ type, title, summary, img, to, github }) => {
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
