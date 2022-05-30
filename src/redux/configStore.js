import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./Reducer/CarouselReducer";
import { QuanLyDatVeReducer } from "./Reducer/QuanLyDatVeRuducer";
import { QuanLyNguoiDungReducer } from "./Reducer/QuanLyNguoiDungReducer";
import { QuanLyPhimReducer } from "./Reducer/QuanLyPhimReducer";
import { QuanLyRapReducer } from "./Reducer/QuanLyRapReducer";

const rootReducer = combineReducers({
  //state ứng dụng
  CarouselReducer,
  QuanLyPhimReducer,
  QuanLyRapReducer,
  QuanLyNguoiDungReducer,
  QuanLyDatVeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
