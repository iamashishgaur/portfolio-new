import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid font-medium text-lg
     border-dark dark:text-light dark:border-light sm:tex-base "
    >
      <Layout className="py-4 flex items-center justify-between lg:flec-col lg:py-6 ">
        <span>{new Date().getFullYear()} &copy; All Right Reseverd </span>
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <span className="text-primary  dark:text-primaryDark  text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href=""
            className="underline underline-offset-2"
            target={"_blank"}
          >
            Ashish
          </Link>
        </div>
        <Link
          href=""
          className="underline underline-offset-2"
          target={"_blank"}
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
