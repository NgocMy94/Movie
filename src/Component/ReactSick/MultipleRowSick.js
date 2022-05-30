import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import {
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../../redux/Types/QuanLyPhimTypes";
import Film_Flip from "../Films/Film_Flip";
import styleSlick from "./MultipleRowSick.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const MultipleRows = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";
  let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";

  const rederFilms = () => {
    return props.arrFilm.slice(0, 12).map((item, i) => {
      return (
        <div className={`${styleSlick["witdh-item"]}`} key={i}>
          <Film_Flip item={item} />
        </div>
      );
    });
  };

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-info mr-3"
        onClick={() => {
          const action = { type: SET_PHIM_DANG_CHIEU };
          dispatch(action);
        }}
      >
        Phim Đang Chiếu
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          const action = { type: SET_PHIM_SAP_CHIEU };
          dispatch(action);
        }}
      >
        Phim Sắp Chiếu
      </button>
      <Slider {...settings}>{rederFilms()} </Slider>
    </div>
  );
};

export default MultipleRows;
