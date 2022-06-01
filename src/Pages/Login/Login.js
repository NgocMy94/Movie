import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction } from "../../redux/Action/QuanLyNguoiDungAction";

export default function Login(props) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  console.log("userLogin", userLogin);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
      console.log("values", values);
    },
  });

  return (
    <form
      onSubmit={(even) => {
        even.preventDefault();
        formik.handleSubmit(even);
      }}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >
      <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div>
            <NavLink to="/home">
              <img
                src="http://blockter.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2018/02/logo.png"
                alt=""
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
xl:text-bold"
        >
          Sign In
        </h2>
        <div className="mt-12">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Tài Khoản
              </div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 pl-4 mt-2 rounded-xl border-b focus:outline-none focus:border-indigo-500"
                placeholder="Nhập Tài Khoản"
              />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
                <div>
                  <NavLink
                    to="/register"
                    className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                    cursor-pointer"
                  >
                    Quên Mật Khẩu ?
                  </NavLink>
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b mt-2 pl-4 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập Mật Khẩu"
              />
            </div>
            <div className="mt-5">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
            shadow-lg"
              >
                Đăng Nhập
              </button>
            </div>
          </div>
          <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn Chưa Có Tài Khoản
            <NavLink
              to="/register"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              Đăng Ký
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
}
