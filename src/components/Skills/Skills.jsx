import Title from "../Title";
import react from "../../assets/react.png";
import laravel from "../../assets/laravel.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import tailwind from "../../assets/tailwind.png";
import php from "../../assets/php.png";
import spring from "../../assets/spring.png";
import java from "../../assets/java.png";
import framer from "../../assets/framer.png";
import mySql from "../../assets/MySql.png";
import sqlserver from "../../assets/sql.png";
import github from "../../assets/github.png";
import git from "../../assets/git.png";
import { motion } from "framer-motion";
const Skills = () => {
  const ListSkills = [
    {
      logo: html,
      name: "html"
    },
    {
      logo: css,
      name: "css"
    },
    {
      logo: js,
      name: "js"
    },
    {
      logo: tailwind,
      name: "tailwind"
    },

    {
      logo: react,
      name: "react"
    },
    {
      logo: framer,
      name: "framer"
    },
    {
      logo: php,
      name: "php"
    },
    {
      logo: laravel,
      name: "laravel"
    },
    {
      logo: java,
      name: "java"
    },
    {
      logo: spring,
      name: "spring"
    },
    {
      logo: mySql,
      name: "mySql"
    },
    {
      logo: sqlserver,
      name: "sql Server"
    },
    {
      logo: github,
      name: "github"
    },
    {
      logo: git,
      name: "git"
    }
  ];
  return (
    <div className="h-full md:h-screen md:pt-10" id="Skills">
      <Title title="Skills" />
      <div className="grid gap-2 p-2  md:grid-cols-5 grid-cols-2  ">
        {ListSkills.map((item, index) => (
          <motion.div
          whileInView={{
              scale: [0, 1, 1, 0, 1],
              rotate: [0, 0, 180, 360, 0],
              borderRadius: ["10%", "0%", "50%", "50%", "10%"]
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              
            
            }}
            key={index}
            className="rounded-full  bg-black/50 w-24 h-24  md:w-32 md:h-32 shadow-lg hover:shadow-black flex items-center justify-center  hover:cursor-pointer m-auto  my-10"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="md:w-20 md:h-20 w-16 h-16 m-5 "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
