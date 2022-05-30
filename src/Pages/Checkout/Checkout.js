import React, { Fragment, useEffect } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhongVeAction } from "../../redux/Action/QuanLyDatVeAction";
import style from "./Checkout.module.css";
import { CloseOutlined } from "@ant-design/icons";
import "./Checkout.css";
import { DAT_VE } from "../../redux/Types/QuanLyDatVeType";
import { sortBy } from "lodash";
import { ThongTinDatVe } from "../../_Cores/Models/ThongTinDatVe";
import { datVeAction } from "../../redux/Action/QuanLyDatVeAction";

export default function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    //Gọi
    const action = layChiTietPhongVeAction(props.match.params.id);
    dispatch(action);
  }, []);

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  console.log({ chiTietPhongVe });

  const renderGhe = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      //Kiem tra tung ghe render xem co trong mang ghe dang dat hay khong
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (indexGheDD != -1) {
        classDaDat = "gheDangDat";
      }
      return (
        <Fragment>
          <button
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat}
            className={`ghe ${classGheVip} ${classDaDat} ${classGheDangDat} text-center`}
            key={index}
          >
            {ghe.daDat ? <CloseOutlined /> : ghe.stt}
          </button>
          {(index + 1) % 12 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <div className="container w-auto" style={{ minHeight: "100vh" }}>
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className=" mt-5">
            <div
              className="bg-black "
              style={{ width: "80%", height: "10px" }}
            ></div>
            <div className={`${style["trapezoid"]} text-center`}>
              <h3 className="mt-3 text-black">Màng Hình</h3>
            </div>
            <div className="">{renderGhe()}</div>
          </div>
        </div>
        <div className="col-span-3">
          <h3 className=" text-center text-4xl text-green-400">
            {" "}
            {danhSachGheDangDat
              .reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}
            đ
          </h3>
          <hr />
          <h3 className="tex-xl">{thongTinPhim.tenPhim}</h3>
          <p>
            Địa điểm : {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
          </p>
          <p>
            Ngày Chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
          </p>
          <hr />
          <div className="grid grid-cols-2">
            <div>
              <span className="text-red-500">Ghế</span>
              {sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                return (
                  <span key={index} className="text-green-500 px-1">
                    {gheDD.stt}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="my-2">
            <i>Email</i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-2">
            <i>Phone</i> <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div
            onClick={() => {
              const thongTinDatVe = new ThongTinDatVe();
              thongTinDatVe.maLichChieu = props.match.params.id;
              thongTinDatVe.danhSachVe = danhSachGheDangDat;
              console.log(thongTinDatVe);

              dispatch(datVeAction(thongTinDatVe));
            }}
            className="btn btn-success mt-5 w-100"
          >
            Đăt Vé
          </div>
        </div>
      </div>
    </div>
  );
}
