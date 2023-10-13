import { Link } from "react-router-dom";
import { GithubIcon, LinkArrow } from "./icons";

export const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-ful flex  flex-col items-center justify-center rounded-2xl border border-dark border-solid bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3x1 dark:bg-light
      md:-tight-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]

      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full  cursor-pointer overflow-hidden rounded-lg "
      >
        <img src={img} alt={title} className="w-full h-auto " />
      </Link>

      <div className="w-full flex flex-col items-center justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light "
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold
          lg:text-2xl
          "
          >
            {title}
          </h2>
        </Link>

        <div className="my-2 flex  justify-between">
          <Link href={github} target="_blank" className="w-8 md:w-10 ">
            <GithubIcon className=" dark:text-primaryDark" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 dark:bg-light dark:text-dark border border-solid hover:dark:bg-dark hover:dark:text-light text-lg font-semibold md:text-base"
          >
            <LinkArrow />
          </Link>
        </div>
      </div>
    </article>
  );
};
