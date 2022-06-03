import React, { useEffect } from "react";
import "./Detail.css";
import "../../assets/styles/Circel.scss";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinLichChieuAction } from "../../redux/Action/QuanLyRapAction";
import moment from "moment";
import { TAB_POSITION_LEFT } from "../../util/constant";
import { isEmpty } from "lodash";
import RenderContent from "./components/RenderContent";

const { TabPane } = Tabs;

export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);

  const tabPosition = TAB_POSITION_LEFT;

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
              {!isEmpty(filmDetail?.heThongRapChieu) &&
                filmDetail.heThongRapChieu?.map((htr, index) => {
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
                      <RenderContent htr={htr} />
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
