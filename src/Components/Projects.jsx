import React from "react"
import java from "../public/java.png"
import reactjs from "../public/reactjs.png"
import spring from "../public/spring.png"
import springBoot from "../public/springBoot.jpg"
import mysql from "../public/mysql.png"
import css from "../public/css.jpg"
import html from "../public/html.png"
import javascript from "../public/javascript.png"
import aws from "../public/aws.png"
function Projects() {

  const cardItem = [
    {
      id: 1,
      logo: java,
      name: "Java",
    },
    {
      id: 2,
      logo: html,
      name: "HTML",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: mysql,
      name: "MYSQL",
    },
    {
      id: 5,
      logo: spring,
      name: "Spring",
    },
    {
      id: 6,
      logo: springBoot,
      name: "SpringBoot",
    },
    {
      id: 7,
      logo: css,
      name: "CSS",
    },
    {
      id: 8,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 9,
      logo: aws,
      name: "AWS",
    },
 
  ];

  return (
    <>
      <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
          <h1 className="text-3xl font-bold mb-5">Projects</h1>
          <span className="font-semibold">Featured Projects</span>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
            {cardItem.map(({ id, logo, name }) => (
              <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                <img src={logo} className="w-[150px] rounded-full " 
                />
                <div>
                  <div className="">{name}</div>
                  <p className="px-2 text-gray-700 "></p>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
