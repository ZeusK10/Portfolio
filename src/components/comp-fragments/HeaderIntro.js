import React from "react";
import { ReactComponent as IntroBlob } from "../../image/svgs/intro-blob.svg";

export default function HeaderIntro() {
  return (
    <div className="intro">
      <IntroBlob />
      <div className="title">
        <h1>Niraj karki</h1>
        <h2>Game Developer</h2>
      </div>
    </div>
  );
}
