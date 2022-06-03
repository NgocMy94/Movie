import axios from "axios";
import { DOMAIN } from "../../util/setting";
import { header } from "./header";

export class baseService {
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: header(),
    });
  };

  post = (url, props) => {
    const { thongTinDatVe, isTwosToken } = props || {};
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: thongTinDatVe,
      headers: header(isTwosToken),
    });
  };

  get = (url) => {
    console.log("url", url);
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: header(),
    });
  };

  delete = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: header(),
    });
  };
}
