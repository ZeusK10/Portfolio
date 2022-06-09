import React, { useRef } from "react";

function Header(props, ref) {
  const logo = require("../../image/logo.png");

  const navToggle = useRef();
  const x = useRef();
  const y = useRef();
  const z = useRef();

  function handleClick() {
    navToggle.current.classList.toggle("nav-display-toggle");
    x.current.classList.toggle("x");
    y.current.classList.toggle("y");
    z.current.classList.toggle("z");
  }

  return (
    <header className="header-container" ref={ref}>
      <div className="header-resp">
        <img src={logo} alt="logo" id="logo" />
        <div className="icon" onClick={handleClick}>
          <div id="b-1" className="bars" ref={x}></div>
          <div id="b-2" className="bars" ref={y}></div>
          <div id="b-3" className="bars" ref={z}></div>
        </div>
      </div>
      <nav className="nav-container" ref={navToggle}>
        <ul>
          <li>
            <a href="https://www.w3schools.com/css/css3_transitions.asp">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/css/css3_transitions.asp">
              RESUME
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/css/css3_transitions.asp">
              ABOUT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default React.forwardRef(Header);
