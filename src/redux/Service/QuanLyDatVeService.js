import { ThongTinDatVe } from "../../_Cores/Models/ThongTinDatVe";
import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService {
  layChiTietPhongVe = (maLichChieu) => {
    const url = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    // maLichChieu lấy từ url
    return this.get(url);
  };

  datVe = (thongTinDatVe = new ThongTinDatVe()) => {
    const isTwosToken = true;
    const url = `/api/QuanLyDatVe/DatVe`;
    return this.post(url, thongTinDatVe, isTwosToken);
  };
}
export const quanLyDatVeService = new QuanLyDatVeService();
