import axios from "axios";
import { DOMAIN, TOKEN_CYBER } from "../../util/setting";
import {
  SET_HE_THONG_RAP_CHIEU,
  SET_THONG_TIN_LICH_CHIEU_PHIM,
} from "../Types/QuanLyRapType";

export const layDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03`,
        method: "GET",
        headers: {
          TokenCybersoft: TOKEN_CYBER,
        },
      });
      console.log("result", result.data.content);
      dispatch({
        type: SET_HE_THONG_RAP_CHIEU,
        heThongRapChieu: result.data.content,
      });
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const layThongTinLichChieuAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`,
        method: "GET",
        headers: {
          TokenCybersoft: TOKEN_CYBER,
        },
      });
      console.log("result", result.data.content);
      dispatch({
        type: SET_THONG_TIN_LICH_CHIEU_PHIM,
        filmDetail: result.data.content,
      });
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
