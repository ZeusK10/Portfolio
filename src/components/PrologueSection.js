import React from "react";
import { ReactComponent as Wave } from "../image/svgs/wave.svg";

export default function PrologueSection() {
  const edu = require("../image/icons/education.png");
  const skill = require("../image/icons/programming-flag.png");
  const hobby = require("../image/icons/hobbies.png");
  return (
    <section className="prologue-section" id="about-section">
      <Wave />
      <h1>Prologue</h1>
      <h4>Welcome to my portfolio website</h4>
      <div className="prologue-container container">
        <div className="row">
          <div className="prologue-card col-4">
            <div className="prologue-icon">
              <div
                className="icn"
                style={{
                  backgroundImage: `url(${edu})`,
                  backgroundSize: "contain",
                }}
              ></div>
            </div>
            <div className="prologue-content">
              <h1>Education</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium laudantium laboriosam commodi libero quos modi non .
              </p>
            </div>
          </div>
          <div className="prologue-card col-4">
            <div className="prologue-icon">
              <div
                className="icn"
                style={{
                  backgroundImage: `url(${skill})`,
                  backgroundSize: "contain",
                }}
              ></div>
            </div>
            <div className="prologue-content">
              <h1>Programming Skill</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium laudantium laboriosam commodi libero quos modi non .
              </p>
            </div>
          </div>
          <div className="prologue-card col-4">
            <div className="prologue-icon">
              <div
                className="icn"
                style={{
                  backgroundImage: `url(${hobby})`,
                  backgroundSize: "contain",
                }}
              ></div>
            </div>
            <div className="prologue-content">
              <h1>Hobbies</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium laudantium laboriosam commodi libero quos modi non .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
