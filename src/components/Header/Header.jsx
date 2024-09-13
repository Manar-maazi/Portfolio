import { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import { IoToggleOutline } from "react-icons/io5";
import { BsToggleOff } from "react-icons/bs";
const Header = ({ Dark, handleDarkbtn, colortext }) => {
  const listNav = ["Home", "About", "Skills", "Works"];
  const [togle, setTogle] = useState(false);
  // const [colortext, setcolorText] = useState("");

  // const colorTxt = (D) => {
  //   D ? setcolorText("text-gray-200") : setcolorText("bg-sky-700");
  // };
  //useEffect(colorTxt(Dark), [Dark]);

  const handlMenu = () => {
    setTogle(!togle);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 md:flex md:justify-between shadow p-1 z-10 ${
        Dark ? "bg-sky-900" : "bg-black/90"
      }`}
    >
      <div>
        <h3
          className={`hover:cursor-pointer font-bold p-2 m-1 border-red-500  ${colortext}  `}
          onClick={handleDarkbtn}
        >
          {Dark ? (
            <BsToggleOff className="mx-1" />
          ) : (
            <IoToggleOutline className="mx-1" />
          )}
        </h3>
      </div>
      <span
        className={`absolute right-0 text-2xl top-2 w-10 mt-2  hover:cursor-pointer md:hidden
            ${colortext}`}
        onClick={handlMenu}
      >
        <AiOutlineMenu />
      </span>
      <nav>
        <ul
          className={`duration-700 md:flex md:items-center md:static absolute  max-md:mt-1 max-md:left-0 max-md:w-full max-md:pl-1 ${
            togle ? "opacity-100 " : "max-md:opacity-0"
          }
            ${Dark ? "bg-sky-900/80" : "bg-black/70 "}`}
        >
          {listNav.map((item) => (
            <li
              key={item}
              className={`"m-1 p-2 md:p-0 md:m-0 md:w-20 md:text-center   duration-500 w-full hover:text-[17px]  hover:text-sky-500 "`}
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
          <li
            className={`text-white w-20 p-1 pb-2  rounded-md text-center my-1 ${
              Dark ? "bg-black" : "bg-sky-700"
            } `}
          >
            <a href="#Contact" className="block">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
