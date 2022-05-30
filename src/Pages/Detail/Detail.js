import React, { useEffect } from "react";
import "./Detail.css";
import "../../assets/styles/Circel.scss";
import { Radio, Space, Tabs } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinLichChieuAction } from "../../redux/Action/QuanLyRapAction";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
  console.log({ filmDetail });
  const [tabPosition, setTabPosition] = useState("left");

  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;

    dispatch(layThongTinLichChieuAction(id));
  }, []);

  return (
    <div className="bg-secondary ">
      <div className="grid grid-cols-3 container w-auto  ">
        <div className="mt-10">
          <img
            style={{ display: "block", margin: "auto" }}
            src={filmDetail.hinhAnh}
            alt=""
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl text-white">{filmDetail.tenPhim}</p>
          <p className="text-sm text-white">
            Ngày Chiếu : {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
          </p>
          <p className="text-1xl text-white  ">{filmDetail.moTa}</p>
          <a className="btn btn-danger" href={filmDetail.trailer}>
            Xem Trailer
          </a>
        </div>
        <div className="ml-40 mt-10">
          <h1 className="text-2xl text-white">Đánh Giá</h1>
          <div className="pacss-wrapper ">
            <span className="pacss-foreground">
              <span className="pacss-number">{filmDetail.danhGia * 10} </span>
            </span>
            <span className="pacss pacss-50" />
          </div>
        </div>
      </div>
      <div className="mt-10  w-2/3 container bg-white px-5 py-5">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Lịch Chiếu" key="1">
            <Tabs tabPosition={tabPosition}>
              {filmDetail.heThongRapChieu?.map((htr, index) => {
                return (
                  <TabPane
                    tab={
                      <div className="flex flex-row items-center justify-center">
                        {" "}
                        <img
                          src={htr.logo}
                          style={{
                            width: "50px",
                            height: "50px",
                            //   display: "block",
                            //   margin: "auto",
                          }}
                        />
                        <h1 className="text-1xl mt-3">{htr.tenHeThongRap}</h1>
                      </div>
                    }
                    key={index}
                  >
                    {htr.cumRapChieu?.map((cumRap, index) => {
                      return (
                        <div className="mt-5" key={index}>
                          <div className="flex flex-row">
                            <img
                              style={{ width: "60px", height: "60px" }}
                              src={cumRap.hinhAnh}
                              alt=""
                            />
                            <div className="ml-2">
                              <p
                                style={{
                                  fontSize: 20,
                                  fontWeight: "bold",
                                  lineHeight: 1,
                                }}
                              >
                                {cumRap.tenCumRap}
                              </p>
                              <p style={{ marginTop: 0 }}>{cumRap.diaChi}</p>
                            </div>
                          </div>
                          <div className="thong-tin-lich-chieu grid grid-cols-4">
                            {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                              return (
                                <NavLink
                                  to={`/checkout/${lichChieu.maLichChieu}`}
                                  className="col-span-1 text-green-700 font-bold"
                                  key={index}
                                >
                                  {moment(lichChieu.ngayChieuGioChieu).format(
                                    "hh:mm A"
                                  )}
                                </NavLink>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </TabPane>
                );
              })}
            </Tabs>
          </TabPane>
          <TabPane tab="Thông Tin" key="2">
            Thông Tin
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Đánh Giá
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
