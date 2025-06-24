import { get, post } from "../util/request";

export const addfavorite = async (options) => {
  const result = await post(`favorite/addfavorite`, options);
  return result;
};

export const getfavorite = async (userID) => {
  const result = await get(`favorite/getfavorite/${userID}`);
  return result;
}
