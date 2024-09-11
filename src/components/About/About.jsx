import bgImage from "../../assets/bgImgAbout.svg";
import Description from "./Description";
import Eductaions from "./Educations";
import Title from "../Title";
const About = ({Dark}) => {
  return (
    <div
      className=" h-full md:pt-5 md:mt-32 "
      style={{ backgroundImage: `url(${bgImage})` }}
      id="About"
    >
      <Title title="About Me" />
      <div>
        <div className="flex flex-wrap ">
          <Description  />
          <Eductaions Dark={Dark}/>
        </div>
      </div>
    </div>
  );
};

export default About;
