import me from "../../assets/My_img.png";
import { motion } from "framer-motion";
import welcome from "../../assets/See You Soon.png";
import bestPractic from "../../assets/bestPractice.png";
export default function Home({Dark}) {
  return (
    <div
      id="Home"
      className="relative md:h-screen h-full mt-36 md:grid md:justify-around md:m-16 md:grid-cols-2 gap-10"
    >
      <motion.div
        className=" flex text-center absolute bg-black/50 rounded-lg  p-6 md:right-10 md:top-40  right-10 "
        initial={{ y: -100, opacity: 0, rotate: 60 }}
        whileInView={{ y: 0, opacity: 1, rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={welcome}
          alt="welcome"
          className="w-10 h-10 "
          initial={{ x: [-2, 10, 0] }}
          animate={{ x: [-2, 10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
        <p className="mt-2">Welcome</p>
      </motion.div>
      <motion.div
        className="flex text-center absolute bg-black/50 rounded-lg px-5 py-1  top-72  left-16 max-sm:hidden
         z-20 md:top-[600px] md:left-1/2 
        "
        initial={{ y: -100, opacity: 0, rotate: 160 }}
        whileInView={{ y: 0, opacity: 1, rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <img src={bestPractic} alt="me" className="w-10 h-10 m-1" />

        <p className="mt-3">Best practice</p>
      </motion.div>
      <motion.div
        className=" relative p-4 w-80 m-auto md:w-auto "
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold mb-4 md:text-6xl ">Hello! I'm</h1>
        <h1 className="text-3xl font-bold mb-4 text-sky-700  md:text-6xl">
          Manar MAAZI
        </h1>
        <p className="text-xl mb-4">Full Stack Developer</p>
        <motion.div
          className={`text-white w-28 p-2 rounded-full text-center my-1   md:text-xl md:w-56  ${Dark?'bg-sky-700 hover:bg-sky-500':'bg-sky-500 hover:bg-sky-700'} `}
          whileHover={{
            scale: 1.1
          }}
        >
          <a href="/public/Manar cv eng.pdf" download>
            My resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative  text-center p-4 mt-6 md:m-0"
        initial={{
          right: "-100vw",
          opacity: 0
        }}
        animate={{
          right: 0,
          opacity: 100
        }}
        transition={{
          duration: 1,
          delay: 1,
          ease: "easeInOut"
        }}
      >
        <motion.svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0  w-full h-full "
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
        >
          <path
            fill="#0070FF"
            d="M31.2,-55.7C40.3,-48.8,47.5,-40.2,58.6,-30.6C69.6,-21.1,84.5,-10.5,87,1.5C89.6,13.5,79.7,26.9,70.5,39.7C61.3,52.4,52.8,64.5,41.1,68.4C29.5,72.4,14.7,68.2,-0.4,68.9C-15.5,69.6,-31,75.1,-41.5,70.4C-51.9,65.8,-57.3,51,-63.4,37.6C-69.5,24.1,-76.2,12.1,-77.2,-0.6C-78.1,-13.2,-73.3,-26.4,-65.8,-37.2C-58.2,-48.1,-47.9,-56.6,-36.5,-62.2C-25.1,-67.8,-12.5,-70.6,-0.7,-69.3C11,-68,22.1,-62.7,31.2,-55.7Z"
            transform="translate(100 100)"
          />
        </motion.svg>

        <img
          src={me}
          alt="my image"
          className=" h-96  mx-auto relative z-9  bottom-10 md:top-72"
        />
      </motion.div>
    </div>
  );
}
