import Title from "../Title";
import Card from "../Works/Card";
import project_1 from "../../assets/projetctEmp.png";
import BgWorks from "../../assets/BgWorks.svg";
import img_1 from "../../assets/portfolioImg.png";
import img_2 from "../../assets/disktop.png";
import img_3 from "../../assets/Weather.png";
import img_4 from "../../assets/Todo_app.png";

export default function Works() {
  const ListProject = [
    {
      img: img_1,
      description:
        "A clean and responsive portfolio built with just HTML, CSS, and JavaScript. It highlights my full-stack development projects and design skills, offering a smooth user experience with a focus on simplicity and functionality.et, dignissimos fugafugiat quos et minima soluta vitae omnis maiores laboriosam magnirepudiandae quia.",
      github: "https://github.com/Manar-maazi",
      demo: "https://manar.netlify.app/"
    },
    {
      img: img_2,
      description:
        "Developed a comprehensive project management system for a store using C#, Crystal Reports, and Material UI. The application streamlines inventory tracking, sales management, and report generation, offering a user-friendly interface with modern design elements.",
      github: "https://github.com/Manar-maazi",
      demo: "https://drive.google.com/drive/folders/1XxW-jgpxhD_RM8yZaqRUjcESexEv9yvW"
    },
    {
      img: project_1,
      description:
        "Employee Payroll Application developed during an internship at GEBS. Built using React, Spring Boot, REST API, and PostgreSQL. This project showcases my full-stack development skills and database management capabilities",
      github: "https://github.com/Manar-maazi/Employee-payroll.git",
      demo: "https://github.com/Manar-maazi/Employee-payroll.git"
    },
    {
      img: img_3,
      description:
        "This project is a weather application built using React and Vite, leveraging the OpenWeather API to fetch current weather data. The app displays weather information based on user input, with the background image changing dynamically according to the weather condition in the default city, Tangier.",
      github: "https://github.com/Manar-maazi/Employee-payroll.git",
      demo: "https://wather-app-site.netlify.app/"
    },
    {
      img: img_4,
      description:
        "A simple and efficient to-do app built with PHP and MySQL for managing daily tasks. The app offers a clean interface where users can add new tasks, mark them as completed, edit existing tasks, and delete them. The backend is powered by PHP for handling CRUD operations, while MySQL ensures data persistence. This project demonstrates fundamental web development concepts, including form handling, session management, and database interactions",
      github: "https://github.com/Manar-maazi/Todo-Php",
      demo: "https://github.com/Manar-maazi/Todo-Php"
    }
  ];

  return (
    <div
      className="h-full  my-20"
      id="Works"
      style={{ backgroundImage: `url(${BgWorks})` }}
    >
      <Title title="My Works" />

      <div className="md:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 grid-cols-1 ">
        {ListProject.map((item, key) => (
          <Card
            key={key}
            img={item.img}
            description={item.description}
            github={item.github}
            demo={item.demo}
          />
        ))}
      </div>
    </div>
  );
}
