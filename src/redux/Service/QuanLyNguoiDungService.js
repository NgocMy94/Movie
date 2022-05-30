import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor(props) {
    super(props);
  }
  dangNhap = (thongTinDangNhap) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();
