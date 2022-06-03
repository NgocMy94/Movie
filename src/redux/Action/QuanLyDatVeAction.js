import { ThongTinDatVe } from "../../_Cores/Models/ThongTinDatVe";
import { quanLyDatVeService } from "../Service/QuanLyDatVeService";
import { SET_CHI_PHONG_VE } from "../Types/QuanLyDatVeType";
import Swal from "sweetalert2";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

      if (result.status === 200) {
        dispatch({
          type: SET_CHI_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });
      }
      // console.log(result);
    } catch (error) {
      console.log(error.reponse?.data);
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      if (result.status === 200) {
        let timerInterval;
        await Swal.fire({
          title: "Đặt vé thành công",
          html: "Chúc bạn xem phim vui vẻ nhé!",
          timer: 3000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      }
    } catch (error) {
      console.log("errors", error.reponse?.data);
    }
  };
};
