import React from "react";
import { Navlinks } from "../Navbar/Navbar";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="dark:bg-black text-white dark:text-white pt-10">
      <div className="container">
        <ul className="flex  items-center justify-center gap-6">
          {Navlinks.map(({ id, name, link }) => (
            <li key={id}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* footer icons */}
      <div className="bg-dark container">
        <div className="mt-10 p-6 flex items-center justify-between gap-6 ">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <div className="flex gap-6">
            <FaFacebook className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
            <FaInstagram className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
            <FaYoutube className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
          </div>
          <div className="hidden sm:block">❤️ by The Coding Journey</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
