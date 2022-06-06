import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  dangNhap = (thongTinDangNhap) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  layThongTinNguoiDung = () => {
    const isTwosToken = true;
    return this.post("/api/QuanLyNguoiDung/LayThongTinNguoiDung", isTwosToken);
  };
}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();
