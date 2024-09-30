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
function Portfolio() {

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
      <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
          <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
          <span className="underline font-semibold">Featured Projects</span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {cardItem.map(({ id, logo, name }) => (
              <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                <img src={logo} className="w-[120px] h-[120px] p1 rounded-full border-[2px]" 
                />
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700 "></p>
                </div>
                <div className="px- py-10 space-x-3  justify-around">
                    <button className="bg-green-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded">Source Code</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
