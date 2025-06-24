import { del, get, post } from "../util/request";

export const orderSave = async (options) => {
  const result = await post(`order/saveOrder`, options);
  return result;
};

export const getorder = async (id) => {
  const result = await get(`order/getorder/${id}`);
  return result;
} 

export const getAllOrder = async () => {
  const result = await get(`order/getallorder`);
  return result;
} 

export const delorder = async (id) => {
  const result = await del(`order/delorder/${id}`)
  return result;
}