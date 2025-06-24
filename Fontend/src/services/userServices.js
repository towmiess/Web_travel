import { del, get, post } from "../util/request";

export const login = async (option) => {
  const result = await post(`user/login`, option);
  return result;
}
export const register = async (options) => {
  const result = await post(`user/register`, options);
  return result;
};

export const getUser = async () => {
  const result = await get(`user/getuser`);
  return result;
}

export const edituser = async (id) => {
  const result = await post(`user/editUser/${id}`);
  return result;
};

export const deluser = async (id) => {
  const result = await del(`user/deluser/${id}`);
  return result;
};





