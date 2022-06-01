import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Select } from "antd";
//Hook đa ngôn ngữ
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
const { Option } = Select;

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const renderLogin = () => {
    if (isEmpty(userLogin)) {
      return (
        <Fragment>
          <NavLink to="/login" className="btn btn-danger">
            {t("Signin")}
          </NavLink>
          <NavLink to="/register" className="btn btn-success ml-3">
            {t("Signup")}
          </NavLink>
        </Fragment>
      );
    }
    return (
      <NavLink to="/profile" className="btn btn-danger">
        {userLogin.taiKhoan}
      </NavLink>
    );
  };

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  const { t, i18n } = useTranslation();
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
        <NavLink className="navbar-brand mr-5" to="/">
          <img
            src="http://blockter.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2018/02/logo.png"
            alt=""
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-5 ">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/new">
                New
              </NavLink>
            </li>
          </ul>
          <div className="ml-auto" style={{ marginRight: "15px" }}>
            {renderLogin()}
          </div>

          <Select
            defaultValue="chi"
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            <Option value="en">Tiếng Anh</Option>
            <Option value="chi">Tiếng Trung</Option>
            <Option value="vi">Tiếng Việt</Option>
          </Select>
        </div>
      </nav>
    </div>
  );
}
