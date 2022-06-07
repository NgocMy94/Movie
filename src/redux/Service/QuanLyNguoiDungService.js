import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  dangNhap = (thongTinDangNhap) => {
    const url = `/api/QuanLyNguoiDung/DangNhap`;
    return this.post(url, thongTinDangNhap);
  };

  layThongTinNguoiDung = () => {
    const url = "api/QuanLyNguoiDung/ThongTinTaiKhoan";
    const isTwosToken = true;
    return this.post(url, {}, isTwosToken);
  };
}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();
