import axios from "axios";
import { DOMAIN, TOKEN_CYBER } from "../../util/setting";
import { SET_DANH_SACH_PHIM } from "../Types/QuanLyPhimTypes";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03`,
        method: "GET",
        headers: {
          TokenCybersoft: TOKEN_CYBER,
        },
      });
      console.log("result", result);
      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
