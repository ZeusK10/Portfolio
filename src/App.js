import React, { useRef } from "react";
import Hero from "./components/Hero";
import PrologueSection from "./components/PrologueSection";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";

export default function App() {
  const wrapper = useRef();

  const heroContainerRef = useRef();
  const headerContainerRef = useRef();
  const refs = useRef({ heroContainerRef, headerContainerRef });

  function handleScroll() {
    const wrapperHeight = wrapper.current.scrollTop;
    const heroContainerHeight = heroContainerRef.current.offsetHeight;
    if (wrapperHeight > heroContainerHeight - 0.5) {
      headerContainerRef.current.classList.add("fixed-nav");
    } else {
      headerContainerRef.current.classList.remove("fixed-nav");
    }
  }

  return (
    <div className="wrapper" onScroll={handleScroll} ref={wrapper}>
      <Hero ref={refs} />
      <PrologueSection />
      <ProjectSection />
      <AboutSection />
    </div>
  );
}
