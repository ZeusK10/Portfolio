import React from "react";
import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Modal(props) {
  const imgs = [];
  imgs.push(require(`../../image/${props.coverImg}`));
  if (props.img) {
    props.img.forEach(function (elem) {
      imgs.push(require(`../../image/${elem}`));
    });
  }
  const slider = imgs.map((elem) => {
    return (
      <SwiperSlide key={elem}>
        <img src={elem} alt="" className="modal-image" />
      </SwiperSlide>
    );
  });

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
      <div className="modal-overlay" onClick={props.onClose} />
      <div className="modal">
        <button
          onClick={props.onClose}
          className="modal-close button-67 medium-font"
        >
          x
        </button>
        <div className="modal-container">
          <div className="modal-image-container">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              // loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {slider}
            </Swiper>
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
