import React, { forwardRef } from "react";
import Header from "./comp-fragments/Header";
import HeaderIntro from "./comp-fragments/HeaderIntro";

function Hero(props, ref) {
  const { heroContainerRef, headerContainerRef } = ref.current;
  return (
    <section className="hero-container" ref={heroContainerRef}>
      <div className="hero bg">
        <Header ref={headerContainerRef} />
        <HeaderIntro />
      </div>
    </section>
  );
}
export default forwardRef(Hero);
