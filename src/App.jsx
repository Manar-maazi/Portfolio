import "./App.css";
import { useState } from "react";
import {
  About,
  Header,
  Skills,
  Works,
  Contact,
  Home,
  Footer
} from "./components/index";

function App() {
  const [colortext, setcolorText] = useState("");
  const [Dark, setDark] = useState(false);
  const handleDarkbtn = (D) => {
    setDark(!Dark);
    D ? setcolorText("text-white") : setcolorText("bg-sky-700");
    console.log(Dark);
  };

  return (
    <div
      className={`" ${Dark ? "bg-black" : "bg-blue-950 "} text-gray-400 pt-1  `}
    >
      <div className="">
        <Header Dark={Dark} handleDarkbtn={handleDarkbtn} colortext={colortext}/>
        <Home />
        <About Dark={Dark} />
        <Skills Dark={Dark} />
        <Works  />
        <Contact />
        <Footer />
      </div> 
    </div>
  );
}

export default App;
