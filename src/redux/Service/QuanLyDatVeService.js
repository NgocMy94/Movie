import { ThongTinDatVe } from "../../_Cores/Models/ThongTinDatVe";
import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService {
  constructor(props) {
    super(props);
  }
  layChiTietPhongVe = (maLichChieu) => {
    // maLichChieu lấy từ url
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };

  datVe = (thongTinDatVe = new ThongTinDatVe()) => {
    const isTwosToken = true;
    return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe, isTwosToken);
  };
}
export const quanLyDatVeService = new QuanLyDatVeService();
