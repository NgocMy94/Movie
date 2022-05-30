import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MultipleRows from "../../Component/ReactSick/MultipleRowSick";
import { layDanhSachPhimAction } from "../../redux/Action/QuanLyPhimAction";
import { layDanhSachHeThongRapAction } from "../../redux/Action/QuanLyRapAction";
import HomeCarousel from "../../Templates/HomeTemplates/Layout/HomeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";

export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const dispatch = useDispatch();
  console.log("propsHome", props);
  // const rederFilms = () => {
  //   return arrFilm.map((phim, index) => {
  //     return <Films key={index} />;
  //   });
  // };
  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);

    dispatch(layDanhSachHeThongRapAction());
  }, []);
  return (
    <div className="bg-secondary">
      <HomeCarousel />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRows arrFilm={arrFilm} />
          {/* <div className="flex flex-wrap " style={{ justifyContent: "center" }}>
            {rederFilms()}
          </div> */}
        </div>
      </section>

      <HomeMenu heThongRapChieu={heThongRapChieu} />
    </div>
  );
}
