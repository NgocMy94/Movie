import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCarouselActions } from "../../../../redux/Action/CarouselAction";
import { Carousel } from "antd";

import "./HomeCarousel.css";

const contentStyle = {
  height: "100vh",
  backgroundSize: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  const dispatch = useDispatch();

  //Tự kích hoạt khi component load

  useEffect(() => {
    dispatch(getCarouselActions());
  }, []);

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          ></div>
        </div>
      );
    });
  };
  return <Carousel autoplay>{renderImg()}</Carousel>;
}
