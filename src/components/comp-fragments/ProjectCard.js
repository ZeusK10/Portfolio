import React, { useState } from "react";
import Modal from "./Modal";

export default function ProjectCard(props) {
  const bgimgtest = require(`../../image/${props.coverImg}`);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="card col-4">
        <div
          className="card-bg bg"
          style={{
            backgroundImage: `url(${bgimgtest})`,
            backgroundSize: "cover",
          }}
        >
          <div className="card-content">
            <div>
              <h1>{props.title}</h1>
              <p className="medium-font">
                {props.intro}...
                <i onClick={() => setIsOpen(true)}>seemore</i>
              </p>
            </div>
          </div>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} {...props} />
      </div>
    </>
  );
}
