import { DOMAIN, SCHEME } from "../const/api";
import callApi from "../utils/apiCaller";

const headers = {
  //prettier-ignore
  "Content-Type": "application/json",
};

export const getCategories = (params) => {
  let jwt_shop = localStorage.getItem("jwt_shop");

  let config = {
    method: "get",
    url: `${SCHEME}://${DOMAIN}/product-category/`,
    headers: {
      ...headers,
      Authorization: "Bearer " + jwt_shop,
    },
    params,
  };
  return callApi(config);
};
