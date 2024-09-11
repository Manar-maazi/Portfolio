import { motion } from "framer-motion";
function decription() {
  return (
    <motion.div className="  m-auto md:p-1 text-center "
    initial={{ opacity:0,x:-100 }}
    whileInView={{ opacity:1,x:0 }}
    transition={{ duration:2 }}>
      <p className="font-extralight text-justify text-sm p-4  block m-auto md:m-0 md:text-xl text-gray-300 md:w-[700px]
      ">
        I’m Manar Maazi, a dedicated full-stack developer with 4 years of
        experience in crafting efficient, scalable web applications. I
        specialize in using modern technologies like React, Laravel, and Spring
        Boot to create robust, user-friendly applications. My journey in tech
        started with a strong foundation in both front-end and back-end
        development, allowing me to build complete, end-to-end solutions that
        meet client needs. During my time at university, I gained hands-on
        experience working on a variety of projects, including a sophisticated
        employee payroll application developed using React, Spring Boot, REST
        API, and PostgreSQL. This project honed my skills in integrating complex
        systems and managing databases, as well as providing a smooth user
        experience. I’m passionate about problem-solving and enjoy the challenge
        of turning ideas into reality. My most recent projects involve building
        a weather application using React and Vite, integrating real-time data
        from OpenWeather API, and creating a secure webshop with Stripe payment
        processing. I’m currently focused on leveraging my skills to help
        businesses automate processes and improve efficiency. As I continue to
        grow in this field, my goal is to eventually start my own business,
        providing full-stack development services to a range of clients. If
        you're looking for a developer who is passionate, detail-oriented, and
        committed to delivering high-quality work, let's connect!
      </p>
    </motion.div>
  );
}

export default decription;
