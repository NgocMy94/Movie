import { quanLyNguoiDungService } from "../Service/QuanLyNguoiDungService";
import {
  QUAN_LY_NGUOI_DUNG_DN,
  SET_THONG_TIN_ND,
} from "../Types/QuanLyNguoDungType";
import { history } from "../../App";

export const dangNhapAction = (thongtinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongtinDangNhap);

      if (result.data.statusCode === 200) {
        dispatch({
          type: QUAN_LY_NGUOI_DUNG_DN,
          thongtinDangNhap: result.data.content,
        });
        //Chuyển hướng đăng nhập về trang trước đo
        history.back();
      }

      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_ND,
          userData: result.data.content,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
