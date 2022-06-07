import { TOKEN_CYBER, USER_LOGIN } from "../../util/setting";
const user = JSON.parse(localStorage.getItem(USER_LOGIN));
export const header = (isTwosToken) => {
  if (isTwosToken) {
    return {
      TokenCybersoft: TOKEN_CYBER,
      Authorization: `Bearer ${user?.accessToken}`,
    };
  } else {
    return {
      TokenCybersoft: TOKEN_CYBER,
    };
  }
};
