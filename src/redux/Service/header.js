import { TOKEN_ACCESS, TOKEN_CYBER } from "../../util/setting";

export const header = (isTwosToken) => {
  if (isTwosToken) {
    return {
      TokenCybersoft: TOKEN_CYBER,
      Authorization: `Bearer ${localStorage.getItem(TOKEN_ACCESS)}`,
    };
  }
  return {
    TokenCybersoft: TOKEN_CYBER,
  };
};
