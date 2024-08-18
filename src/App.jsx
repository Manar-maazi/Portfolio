import "./App.css";

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
  return (
    <div className="bg-blue-950  text-gray-400 p-1 ">
      <div className="">
        <Header />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
