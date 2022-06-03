import { TOKEN_CYBER, USER_LOGIN } from "../../util/setting";
import { QUAN_LY_NGUOI_DUNG_DN } from "../Types/QuanLyNguoDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case QUAN_LY_NGUOI_DUNG_DN: {
      const { thongtinDangNhap } = action;

      localStorage.setItem(USER_LOGIN, JSON.stringify(thongtinDangNhap));
      localStorage.setItem(TOKEN_CYBER, thongtinDangNhap.accessToken);
      return { ...state, userLogin: thongtinDangNhap };
    }
    default:
      return { ...state };
  }
};
