import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor(props) {
    super(props);
  }
  dangNhap = (thongTinDangNhap) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  dangKy = (thongTinDangKy) => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
  };
}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();
