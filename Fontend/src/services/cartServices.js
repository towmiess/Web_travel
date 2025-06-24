import { del, get, post } from "../util/request";

export const addtocart = async (options) => {
  const result = await post(`cart/addcart`, options);
  return result;
};

export const getCart = async (userID) => {
  const result = await get(`cart/getcart/${userID}`);
  return result;
}

export const delCart = async (userID) => {
  const result = await del(`cart/delcart/${userID}`);
  return result;
}

export const delOneCart = async (tourID) => {
  const result = await del(`cart/delOnecart/${tourID}`);
  return result;
}