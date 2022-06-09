import React from "react";
import { ReactComponent as IntroBlog } from "../../image/svgs/intro-blob.svg";

export default function HeaderIntro() {
  return (
    <div className="intro">
      <IntroBlog />
      <div className="title">
        <h1>Niraj karki</h1>
        <h2>Game Developer</h2>
      </div>
    </div>
  );
}
