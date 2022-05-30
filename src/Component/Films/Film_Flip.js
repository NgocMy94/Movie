import React from "react";
import { NavLink } from "react-router-dom";
import "./Film_Flip.css";

export default function Film_Flip(props) {
  const { item } = props;
  return (
    <div className="container my-9">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div
              style={{
                backgroundPosition: "center",
                backgroundSize: "100%",
                background: `url(${item.hinhAnh})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                className="opacity-0 w-full"
                src={item.hinhAnh}
                alt="Avatar"
                style={{ width: "100%", height: "300px" }}
              />
            </div>
          </div>
          <div className="flip-card-back">
            <h3>{item.tenPhim}</h3>
            <p className="leading-relaxed mb-3">
              {item.moTa.length > 100 ? (
                <span>{item.moTa.slice(0, 100)}...</span>
              ) : (
                <span>{item.moTa}</span>
              )}
            </p>
          </div>
        </div>
        <div>
          <NavLink
            to={`/detail/${item.maPhim}`}
            className="btn btn-success w-100"
          >
            ĐẶT VÉ
          </NavLink>
        </div>
      </div>
    </div>
  );
}
