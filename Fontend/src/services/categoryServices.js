import { del, get, post } from "../util/request";

export const getCategory = async () => {
  const result = await get(`category`);
  return result;
}

export const getAllCategory = async () => {
  const result = await get(`category/getallcate`);
  return result;
}

export const addcate = async (options) => {
  const result = await post("category/addcate", options);
  return result;
} 

export const editcate = async (options) => {
  const result = await post("category/editcate", options);
  return result;
}

export const delcate = async (id) => {
  const result = await del(`category/delcate/${id}`);
  return result;
}