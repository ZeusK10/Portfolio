import React from "react";
import { ReactComponent as FacebookIcon } from "../image/svgs/facebook-icon.svg";
import { ReactComponent as InstaIcon } from "../image/svgs/icons8-instagram.svg";
import { ReactComponent as GithubIcon } from "../image/svgs/icons8-github.svg";
import { ReactComponent as MediumIcon } from "../image/svgs/icons8-medium.svg";
import { ReactComponent as Wave } from "../image/svgs/wave.svg";

export default function AboutSection() {
  return (
    <>
      <Wave className="rev-wave" />
      <section className="about-section" id="about-section">
        <div className="about-section-container">
          <div className="about-content">
            <div className="about-title">
              <div className="me bg"></div>
              <h1>&copy; Niraj karki</h1>
              <div className="about-icons-container">
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon className="about-icons" title="facebook" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstaIcon className="about-icons" title="instagram" />
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <GithubIcon className="about-icons" title="github" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MediumIcon className="about-icons" title="medium" />
                </a>
              </div>
            </div>
            <div>
              <div className="about-section-title-container">
                <h1 className="about-section-title">About me</h1>
              </div>
              <p className="medium-font">
                A professional unity game developer with a passion for games. I
                love to learn new things and implement them in unique ways to
                see what I can achieve with them. I thrive in a team where we
                can learn from each other's mistakes to make ourselves better
                developers.
              </p>
              <p className="medium-font">
                Ever since I was a kid, I love Arts and Craft. I did a lot
                origami and made various wire structures and plastic toys in my
                spare time. I love listening to music. I started playing violin
                recently. I follow a number of sci-fi and fantasy genre movies
                and television shows (Have you watched Supernatural?). I am also
                an aspiring writer and written some short stories and blogs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
