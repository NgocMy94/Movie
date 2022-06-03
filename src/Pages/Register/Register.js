import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      maNhom: "GP01",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Tài khoản không được để trống"),
      matKhau: Yup.string()
        .required("Mật Khẩu không được để trống")
        .min(3, "Độ dài ít nhất 3 ký tự")
        .max(6, "độ dài tối đa 6 ký tự"),
      email: Yup.string()
        .required("Email không được để trống")
        .email("email không đúng định dạng"),
      hoTen: Yup.string()
        .required("Họ Tên không được để trống")
        .matches(/^[A-Z a-z]+$/, "Họ tên không đúng định dạng"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >
      <div className="pt-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div>
            <svg
              className="w-10 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 225 225"
              style={{ enableBackground: "new 0 0 225 225" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                ",
                }}
              />
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <g>
                  <path
                    id="Layer0_0_1_STROKES"
                    className="st0"
                    d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
    xl:text-bold"
        >
          Đăng Ký
        </h2>
        <div className="mt-2">
          <div>
            <div>
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Họ Và Tên
                </div>
              </div>
              <input
                type="text"
                name="hoTen"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b pl-4 mt-2 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nguyen Van A"
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </div>
              </div>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b pl-4 mt-2 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Số Điện Thoại
                </div>
              </div>
              <input
                type="text"
                name="soDT"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b pl-4 mt-2 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="0909900009"
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mã Nhóm
                </div>
              </div>
              <input
                type="text"
                name="maNhom"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b pl-4 mt-2 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="1 - 2 - 3"
              />
            </div>

            <div>
              <div className="text-sm font-bold mt-2 text-gray-700 tracking-wide">
                Tài Khoản
              </div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b pl-4 mt-2 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào tài khoản"
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật Khẩu
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b pl-4 mt-2 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào mật khẩu"
              />
            </div>

            <div className="mt-5">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                shadow-lg"
              >
                Đăng Ký
              </button>
            </div>
          </div>
          <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn Chưa Có Tài Khoản
            <NavLink
              to="login"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800 ml-2"
            >
              Đăng Nhập
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
}
