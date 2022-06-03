import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  dangNhap = (thongTinDangNhap) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  lichSuDatVe = () => {
    return this.post(`
     /api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };
}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();
