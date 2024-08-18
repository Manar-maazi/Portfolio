import { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const listNav = ["Home", "About", "Skills", "Works"];
  const[togle,setTogle]=useState(false);
  const handlMenu =()=>{
        setTogle(!togle)
  }
  return (
    <header className="fixed top-0 left-0 right-0 md:flex md:justify-between  p-1 z-10 bg-black/70 shadow md:text-xl md:bg-black/50">
      <div>
        <h3 className="hover:cursor-pointer font-bold p-2 text-sky-700 m-1 ">MNR_Dev</h3>
      </div>
      <span className="absolute right-0 text-2xl top-2 w-10 mt-2 text-sky-700 hover:cursor-pointer md:hidden" onClick={handlMenu}><AiOutlineMenu/></span>
      <nav>
        
        <ul className={`duration-700 md:flex md:items-center md:static absolute max-md:bg-black/70 max-md:mt-1 max-md:left-0 max-md:w-full max-md:pl-1 ${togle?'opacity-100 ':'max-md:opacity-0'}`}>
          {listNav.map((item) => (
            <li key={item} className="m-1 p-2 md:w-32 md:text-center hover:text-gray-200 hover:bg-sky-700 md:hover:rounded-full  duration-500 w-full " >
              <a href={`#${item}`} className="">{item}</a>
            </li>
          ))}
         <li className="text-white w-28 p-2 rounded-full text-center my-1 bg-sky-700  md:text-xl ">
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
