import { DOMAIN, SCHEME } from "../const/api";
import callApi from "../utils/apiCaller";

const headers = {
  //prettier-ignore
  "Content-Type": "application/json",
};

export const login = (data) => {
  let jwt_shop = localStorage.getItem("jwt_shop");

  let config = {
    method: "post",
    url: `${SCHEME}://${DOMAIN}/authStaff/login`,
    headers: {
      ...headers,
      Authorization: "Bearer " + jwt_shop,
    },
    data,
  };
  return callApi(config);
};

export const signup = (data) => {
  let jwt_shop = localStorage.getItem("jwt_shop");

  let config = {
    method: "post",
    url: `${SCHEME}://${DOMAIN}/authStaff/signup`,
    headers: {
      ...headers,
      Authorization: "Bearer " + jwt_shop,
    },
    data,
  };
  return callApi(config);
};
