import { isEmpty } from "lodash";
import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";

const RenderFooter = (props) => {
  const { cumRap } = props || {};
  return (
    <div className="thong-tin-lich-chieu grid grid-cols-4">
      {!isEmpty(cumRap.lichChieuPhim) &&
        cumRap?.lichChieuPhim?.map((lichChieu, index) => {
          return (
            <NavLink
              to={`/checkout/${lichChieu.maLichChieu}`}
              className="col-span-1 text-green-700 font-bold"
              key={index}
            >
              {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
            </NavLink>
          );
        })}
    </div>
  );
};

export default RenderFooter;
