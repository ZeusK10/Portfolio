import React from "react";
import ReactDOM from "react-dom";

export default function Modal(props) {
  const img = require(`../../image/${props.coverImg}`);
  if (!props.open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal">
        <button onClick={props.onClose} className="modal-close button-67">
          x
        </button>
        <div className="modal-container">
          <div className="modal-image-container">
            <div
              className="modal-image bg"
              style={{
                backgroundImage: `url(${img})`,
              }}
            ></div>
          </div>
          <div className="modal-title">
            <h1>{props.title}</h1>

            <a href={props.gamelink}>
              <button className="button-49">play now</button>
            </a>
          </div>
        </div>
        <p>{props.intro}</p>
        <p>{props.desc}</p>
      </div>
    </>,
    document.getElementById("portal")
  );
}
