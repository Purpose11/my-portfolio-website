import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default page;
