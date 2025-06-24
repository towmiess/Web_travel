import { post } from "../util/request";

export const payment = async (options) => {
  const result = await post(`pays/payment`, options);
  return result;
};