import axios from "axios";
import { DOMAIN, TOKEN_ACCESS, TOKEN_CYBER } from "../../util/setting";
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

  post = (url, model, isTwosToken) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: header(isTwosToken),
    });
  };

  get = (url) => {
    // console.log("url", url);
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
