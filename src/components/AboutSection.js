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
      <section className="about-section">
        <h1>About me</h1>
        <div className="about-content" id="about-section">
          <div className="about-title">
            <div className="me bg"></div>
            <h1>&copy; Niraj karki</h1>
            <div className="about-icons-container">
              <a href="lda">
                <FacebookIcon className="about-icons" title="facebook" />
              </a>
              <a href="lda">
                <InstaIcon className="about-icons" title="instagram" />
              </a>
              <a href="lda">
                <GithubIcon className="about-icons" title="github" />
              </a>
              <a href="lda">
                <MediumIcon className="about-icons" title="medium" />
              </a>
            </div>
          </div>
          <div>
            <p className="medium-font">
              Louda ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium laudantium laboriosam commodi libero quos modi non
              error nobis sequi iure cum perferendis at distinctio ea aspernatur
              quo, unde eligendi explicabo vero Louda ipsum, dolor sit amet
              consectetur adipisicing elit. Accusantium laudantium laboriosam
              commodi libero quos modi non error nobis sequi iure cum
              perferendis at distinctio ea aspernatur quo, unde eligendi
              explicabo vero Louda ipsum, dolor sit amet consectetur adipisicing
              elit. Accusantium laudantium laboriosam commodi libero quos modi
              non error nobis sequi iure cum perferendis at distinctio ea
              aspernatur quo, unde eligendi explicabo vero explicabo vero Louda
              ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
              laudantium laboriosam commodi libero quos modi non error nobis
              sequi iure cum perferendis at distinctio ea aspernatur quo, unde
              eligendi explicabo vero
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
