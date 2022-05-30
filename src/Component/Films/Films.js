import React from "react";

export default function Films(props) {
  const { phim } = props;
  return (
    <div className="mx-2 first-letter:h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <div
        style={{
          background: `url(${phim.hinhAnh})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
        }}
      >
        <img
          src={phim.hinhAnh}
          alt=""
          style={{ height: "200px" }}
          className="opacity-0 w-full"
        />
      </div>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        {phim.tenPhim}
      </h1>
      <p className="leading-relaxed mb-3">
        {phim.moTa.length > 100 ? (
          <span>{phim.moTa.slice(0, 100)}...</span>
        ) : (
          <span>{phim.moTa}</span>
        )}
      </p>
      <button className="btn btn-success"> Đặt Vé</button>
    </div>
  );
}
