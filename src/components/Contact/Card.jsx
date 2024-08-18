import Bgimg from "../../assets/BgContact.png";
import {
  FaGithub,
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
  FaPhone
} from "react-icons/fa";
import { delay, motion } from "framer-motion";
import { IoIosMailOpen } from "react-icons/io";

function Card() {
  const listContat = [
    {
      icon: <IoIosMailOpen className="text-4xl mr-6 text-sky-500" />,
      title: "MAIL ME",
      detail: "mmanar.maazi@gmail.com"
    },
    {
      icon: <FaPhone className="text-3xl mr-6 text-sky-500" />,
      title: "CALL ME",
      detail: "+212 613724750"
    }
  ];

  const listIcon = [
    {
      icon: <FaLinkedinIn />,
      name: "linkedin",
      link: "https://www.linkedin.com/in/manar-maazi"
    },
    {
      icon: <FaGithub />,
      name: "github",
      link: "https://github.com/Manar-maazi"
    },
    {
      icon: <FaTiktok />,
      name: "tiktok",
      link: ""
    },
    {
      icon: <FaInstagram />,
      name: "instagram",
      link: ""
    }
  ];

  return (
    <motion.div
      className="h-full p-4 w-[400px] md:w-[500px]"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-xl mt-4 text-center m-1 text-gray-300">
        Feel Free to Ask Me!
      </h1>
      <motion.img
      src={Bgimg}
      alt="send message"
      className="w-60 m-auto"
      transition={{
        x: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: "easeInOut" // Smooth easing function
        }
      }}
      animate={{ x: [0, -10, 0, 10, 0] }} // Adjusted bounce pattern
    />
      <p className="p-2 text-justify mt-2">
        I am a passionate full-stack developer with a keen eye for detail and a
        love for crafting robust web applications. Whether you have questions
        about web development, need help with your project, or want to
        collaborate, I'm here to help. Let's create something amazing together!
      </p>

      {listContat.map((item, index) => (
        <div key={index} className="flex items-center mt-4 ml-2">
          {item.icon}
          <div>
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="text-sm">{item.detail}</p>
          </div>
        </div>
      ))}

      <ul className="flex justify-between gap-4 m-4 w-60 mx-auto mt-10">
        {listIcon.map((item) => (
          <li key={item.name}>
            <a href={item.link} className="block">
              <motion.span
                className="w-9 h-9 hover:text-white hover:bg-sky-500 bg-black/50 rounded-full hover:cursor-pointer p-1 flex items-center justify-center text-xl"
                whileHover={{
                  scale: 1.1
                }}
              >
                {item.icon}
              </motion.span>
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Card;
