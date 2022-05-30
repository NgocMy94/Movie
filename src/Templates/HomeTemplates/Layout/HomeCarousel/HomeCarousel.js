import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCarouselActions } from "../../../../redux/Action/CarouselAction";
import { Carousel } from "antd";

const contentStyle = {
  height: "700px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  const dispatch = useDispatch();

  //Tự kích hoạt khi component load

  useEffect(() => {
    dispatch(getCarouselActions());
  }, []);

  console.log("arrImg", arrImg);

  const renderImg = () => {
    return arrImg.map((phim, i) => {
      return (
        <div className="w-full">
          <div key={i}>
            <div
              style={{ ...contentStyle, background: `url(${phim.hinhAnh})` }}
            >
              <img src={phim.hinhAnh} className="w-full" alt="" />
            </div>
          </div>
        </div>
      );
    });
  };
  return <Carousel autoplay>{renderImg()}</Carousel>;
}
