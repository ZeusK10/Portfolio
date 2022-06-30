import React from "react";
import ReactDOM from "react-dom";

export default function Modal(props) {
  const img = require(`../../image/${props.coverImg}`);
  let gamelink;
  if (props.gamelink) {
    gamelink = (
      <a href={props.gamelink}>
        <button className="button-49">PLAY GAME</button>
      </a>
    );
  }
  let date;
  if (props.date) {
    date = <h4>-{props.date}</h4>;
  }
  if (!props.open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal">
        <button
          onClick={props.onClose}
          className="modal-close button-67 medium-font"
        >
          <span>x</span>
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
            {gamelink}
            {date}
          </div>
        </div>
        <p>{props.intro}</p>
        <p>{props.desc}</p>
      </div>
    </>,
    document.getElementById("portal")
  );
}
