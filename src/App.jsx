import { EntryBox } from "./Components/EntryBox";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/header";
import { MainContent } from "./Components/main";
import { MainArea } from "./Components/MainArea";
import "../src/globals.css"
import { Route,Routes } from "react-router-dom";
import { useEffect,useRef } from "react";
import { HomePage } from "./Pages/Home";
import { Tools } from "./Pages/Tools";

export function App() {
   const cursorLightRef = useRef(null);
   useEffect(() => {
      const light = cursorLightRef.current;
  
      const handleMouseMove = (e) => {
         if(light) {
            light.style.transform = `translate(${e.clientX - 100}px, ${e.clientY - 100}px)`;
         }
      };
  
      document.addEventListener("mousemove",handleMouseMove);
  
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);


   return (
      <>
      <Routes>
        <Route path="/" element = {<div style={{display: "flex", flexDirection: "column"}}>
        <div ref={cursorLightRef} id="cursor-light" className="cursor-light"></div><HomePage /></div>} />
        <Route path="/tools" element = {<>
         <div ref={cursorLightRef} id="cursor-light" className="cursor-light"></div>
         <Tools />
        </>} />
      </Routes>
   </>
   )
}