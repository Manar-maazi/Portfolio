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
const Skills = ({ Dark }) => {
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
      name: "sql"
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
  console.log(Dark)
  return (
    <div className="h-full md:pt-10" id="Skills">
      <Title title="Skills" />
      <div className="grid gap-2 p-2  md:grid-cols-5 grid-cols-2 ">
        {ListSkills.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={index}
            className={`rounded-full  w-28 h-28  shadow-lg  flex items-center justify-center  hover:cursor-pointer m-auto  my-10 ${
              Dark ? 'bg-sky-900/50 hover:shadow-sky-800/30': 'bg-black/50  hover:shadow-black/30'
            }`}
          >
            <div>
              <img src={item.logo} alt={item.name} className="w-10 h-10 " />
              <p className="text-center text-gray-500 ">{item.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
