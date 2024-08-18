const Circle = () => {
  return <div className="h-4 w-4 bg-black/50 rounded-full"></div>;
};
import {motion} from 'framer-motion'
function Educations() {
  const education = [
    {
      name: "Morocco, ENSA",
      year: "2023-2024",
      description: "Professional Degree in Systems Engineering"
    },
    {
      name: "Morocco, ISTA Maamora",
      year: "2020-2022",
      description: "Specialization in Computer Development"
    },
    {
      name: "Morocco, High School Benabbad",
      year: "2019-2020",
      description: "Baccalaureate in Physical Sciences"
    }
  ];

  return (
    <div className=" p-4 md:p-8 grow-1  m-auto flex md:mt-10">
      <div className="flex flex-col ml-6">
        {education.map((item) => (
          <motion.div key={item.year} className="flex items-center mb-5 md:mb-20 md:w-[550px]"
           initial={{ opacity:0,y:-100,rotate:60 }}
           whileInView={{ opacity:1,y:0,rotate:0 }}
           transition={{ duration: 0.5 }}
          >
            <div className="relative flex flex-col items-center">
              <Circle />

              <div className="h-16 border-l-2 border-black/50 "></div>
            </div>
            <div className="bg-black/50 p-4 rounded-sm md:pl-6 md:pr-6 ml-4 w-full">
              <h2 className="text-lg md:text-xl">{item.description}</h2>
              <p className="text-sm md:text-base">{item.year}</p>
              <small className="text-xs md:text-sm">{item.name}</small>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Educations;
