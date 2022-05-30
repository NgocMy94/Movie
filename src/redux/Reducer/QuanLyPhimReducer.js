import {
  SET_DANH_SACH_PHIM,
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../Types/QuanLyPhimTypes";
import { SET_THONG_TIN_LICH_CHIEU_PHIM } from "../Types/QuanLyRapType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 8708,
      tenPhim: "RỪNG THẾ MẠNGG",
      biDanh: "rung-the-mangg",
      trailer: "https://www.youtube.com/embed/Vm3t0goJOGg",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/rung-the-mang_gp01.jpg",
      moTa: "Phim được thực hiện dựa trên các sự kiện có thật xảy ra tại một trong những cung đường trekking nổi tiếng nhất nước ta: Tà Năng - Phan Dũng. Đây cũng là tác phẩm đầu tiên của điện ảnh Việt Nam làm về chủ đề sinh tồn.",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-05-08T00:25:28.38",
      danhGia: 6,
      hot: true,
      dangChieu: true,
      sapChieu: false,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],

  filmDetail: {},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;

      return { ...state };
    }
    case SET_PHIM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }
    case SET_PHIM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }
    case SET_THONG_TIN_LICH_CHIEU_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
