import React, { Fragment, useState } from "react";
import { Space, Radio, Tabs } from "antd";
import { useSelector } from "react-redux";
import renderEmpty from "antd/lib/config-provider/renderEmpty";
import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;

export default function HomeMenu(props) {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const rerderRapChieu = () => {
    return heThongRapChieu.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img
              src={heThongRap.logo}
              style={{ width: "47px", height: "47px" }}
            />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img
                        src={heThongRap.logo}
                        style={{ width: "47px", height: "47px" }}
                      />
                      <div className="text-left ml-2">
                        {cumRap.tenCumRap}
                        <p className="text-red-500">Chi Tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {/* Load Phim  */}
                  {cumRap.danhSachPhim.map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="mb-10" key={index}>
                          <div style={{ display: "flex" }}>
                            <img
                              style={{ width: "150px", height: "200px" }}
                              src={phim.hinhAnh}
                            />
                            <div className="ml-2">
                              <h1 className="mb-2 text-2xl text-green-800">
                                {phim.tenPhim}
                              </h1>
                              <p>{cumRap.diaChi}</p>

                              <div className="grid grid-cols-5 gap-5">
                                {phim.lstLichChieuTheoPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        className={"text-1xl text-red-500"}
                                        to="/"
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  const [tabPosition, setTabPosition] = useState("left");

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  console.log("props homenu", props);

  return (
    <div>
      <Tabs tabPosition={tabPosition}>{rerderRapChieu()}</Tabs>
    </div>
  );
}
