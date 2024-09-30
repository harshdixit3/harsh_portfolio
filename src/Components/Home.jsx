import React from "react";
import pic1 from "../public/pic1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import { AiOutlineJava } from "react-icons/ai";
import { SiMysql } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { ReactTyped, Typed } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to my Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello,I'm a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-blue-900 font-bold"
                strings={[
                  "Developer.",
                  "Programmer.",
                  "Coder.",
                  " Problem Solver.",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hello! I’m Harsh Dixit, a passionate full stack developer with
              expertise in Java, JavaScript, React.Js and AWS cloud computing.
              My journey in the tech world began with a fascination for creating
              seamless user experiences. From crafting elegant front-end
              interfaces to architecting robust back-end systems, I thrive on
              turning ideas into functional, user-friendly Applications.
            </p>
            <br />
            {/* Social meadia icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available On</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://linkedin.com/in/harsh-dixit-3155861b5" target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="https://github.com/harshdixit3?tab=repositories" target="_blank">
                    <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="https://www.instagram.com/harshdixit3/?hl=en" target="_blank">
                    <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="https://gitlab.com" target="_blank">
                    <FaGitlab className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently Working on</h1>
                <div className="flex space-x-5">
                  <AiOutlineJava className="text-xl md:text-3*1 hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiMysql className="text-xl md:text-3*1 hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiHibernate className="text-xl md:text-3*1 hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiSpring className="text-xl md:text-3*1 hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiSpringboot className="text-xl md:text-3*1 hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <TbBrandReact className="text-xl md:text-3*1 hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaAws className="text-xl md:text-3*1 hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
          <img 
            src={pic1}
            className="rounded-full md:w-[450px] md:h-[450px]"
            alt="" />
            </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
