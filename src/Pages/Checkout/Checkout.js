import React, { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhongVeAction } from "../../redux/Action/QuanLyDatVeAction";
import style from "./Checkout.module.css";
import { CloseOutlined } from "@ant-design/icons";
import "./Checkout.css";
import { DAT_VE } from "../../redux/Types/QuanLyDatVeType";
import { sortBy, isEmpty } from "lodash";
import { ThongTinDatVe } from "../../_Cores/Models/ThongTinDatVe";
import { datVeAction } from "../../redux/Action/QuanLyDatVeAction";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import { layThongTinNguoiDungAction } from "../../redux/Action/QuanLyNguoiDungAction";
import Swal from "sweetalert2";
import _ from "lodash";
const { TabPane } = Tabs;

function Checkout(props) {
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
      if (indexGheDD !== -1) {
        classDaDat = "gheDangDat";
      }
      return (
        <Fragment key={index}>
          <button
            key={index}
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat}
            className={`ghe ${classGheVip} ${classDaDat} ${classGheDangDat} text-center`}
          >
            {ghe.daDat ? <CloseOutlined /> : ghe.stt}
          </button>
          {(index + 1) % 12 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <div className=" bg-secondary " style={{ minHeight: "100vh" }}>
      <div className="container ">
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <div className=" mt-5">
              <div
                className="bg-black "
                style={{ width: "80%", height: "10px" }}
              ></div>
              <div className={`${style["trapezoid"]} `}>
                <h3
                  className="text-white text-center"
                  style={{ lineHeight: "30px" }}
                >
                  Màng Hình
                </h3>
              </div>
              <div className="">{renderGhe()}</div>
            </div>
            <div className="mt-5 flex justify-center">
              <table className="table container ">
                <thead>
                  <tr>
                    <th scope="col">Ghế Chưa Đặt</th>
                    <th scope="col">Ghế Đang Đặt</th>
                    <th scope="col">Ghế Víp</th>
                    <th scope="col">Ghế Đã Đặt</th>
                    <th scope="col">Ghế Mình Đặt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <button className="ghe text-center"> 00 </button>
                    </td>
                    <td>
                      <button className="ghe gheDangDat text-center">
                        {" "}
                        00{" "}
                      </button>
                    </td>
                    <td>
                      <button className="ghe gheVip text-center"> 00 </button>
                    </td>
                    <td>
                      <button className="ghe gheDaDat text-center"> 00 </button>
                    </td>
                    <td>
                      <button className="ghe gheDaDuocDat text-center">
                        {" "}
                        00{" "}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-3 mt-10">
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

                if (_.isEmpty(danhSachGheDangDat)) {
                  Swal.fire({
                    title: "Chọn tối thiểu 1 ghế để đặt vé",
                    icon: "error",
                    confirmButtonText: "Đã hiểu",
                  });
                } else {
                  dispatch(datVeAction(thongTinDatVe));
                }

                console.log(thongTinDatVe);
              }}
              className="btn btn-success mt-5 w-100"
            >
              Đăt Vé
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const callblack = (key) => {};

export default function CheckoutTab(props) {
  const { userLogin } = useSelector((state) => state.QuanLyDatVeReducer);
  const operations = (
    <Fragment>
      {!isEmpty(userLogin) ? (
        <NavLink to="/profile" className="btn btn-danger">
          {userLogin.taiKhoan}
          <div className="rounded-full">{userLogin.taiKhoan}</div>
        </NavLink>
      ) : (
        " "
      )}
    </Fragment>
  );

  return (
    <div className="bg-secondary ">
      <div className="container">
        <Tabs
          tabBarExtraContent={operations}
          defaultActiveKey="1"
          onChange={callblack}
        >
          <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
            <Checkout {...props} />
          </TabPane>
          <TabPane tab="02 KẾT QUẢ ĐẶT VÉ " key="2">
            <KetQuaDatVe {...props} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
function KetQuaDatVe(props) {
  const { cumRap } = props || {};
  const dispatch = useDispatch();
  // const { userData } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log(userLogin);
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  useEffect(() => {
    //Gọi
    const action = layChiTietPhongVeAction(props.match.params.id);
    dispatch(action);
  }, []);

  const { thongTinPhim } = chiTietPhongVe;
  // useEffect(() => {
  //   dispatch(layThongTinNguoiDungAction());
  // }, [dispatch]);
  // console.log("thongTinNguoiDung", userData);

  return (
    <div className="p-0">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black  ">
              Kết Quả Đặt Vé Của Bạn
            </h1>
            <h3 className="lg:w-2/3 mx-auto leading-relaxed text-black text-xl">
              Xem lại danh sách các vé đã đặt và thời gian để không bõ lỡ phút
              giây nào của phim bạn nhé!
            </h3>
          </div>
          <div className="grid grid-cols-3 container w-auto  ">
            <div className="mt-0">
              <img src={thongTinPhim.hinhAnh} alt="" />
            </div>
            <div>
              <h1 className="text-2xl">{thongTinPhim.tenPhim}</h1>
              <h3 className="text-xl ">
                Địa điểm : {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
              </h3>
              <h3 className="text-xl ">
                Ngày Chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
              </h3>
              <div>
                <span className="text-xl text-black mr-3">Ghế : </span>
                {sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                  return (
                    <span key={index} className="text-xl text-black px-1">
                      {gheDD.stt}
                    </span>
                  );
                })}
              </div>
              <h1 className="text-2xl py-1">Thông Tin Người Đặt Vé : </h1>
              <h3 className="text-xl">Họ Và Tên : {userLogin.hoTen}</h3>
              <h3 className="text-xl">Số Điện Thoại : {userLogin.soDT}</h3>
              <h3 className="text-xl">Email: {userLogin.email}</h3>
              <h3 className="text-xl ">
                Tổng Tiền :
                {danhSachGheDangDat
                  .reduce((tongTien, ghe, index) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}
                đ
              </h3>
              <div className="mt-3">
                <button
                  onClick={() => {
                    props.history.goBack();
                  }}
                  className="btn btn-success mr-3 "
                >
                  Mua Thêm Vé Phim Này
                </button>
                <NavLink className="btn btn-success " to="/home">
                  Trở Về Trang Home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
