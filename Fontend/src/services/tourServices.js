import { del, get, post } from "../util/request";

//lấy dữ liệu tour theo bộ lọc
export const getTour = async (cateSlug, sortBy, order) => {
  const result = await get(`tours?slugCategory=${cateSlug}&sortBy=${sortBy}&order=${order}`);
  return result;
}

//lấy dữ liệu không theo bộ lọc
export const getAll = async () => {
  const result = await get("tours/allTour");
  return result;
}

export const getTourCate = async (slug) => {
  const result = await get(`tours/${slug}`);
  return result;
}

export const getTourDetail = async (slug) => {
  const result = await get(`tours/detail/${slug}`);
  return result;
}

export const addtour = async (options) => {
  const result = await post(`tours/addtour`, options);
  return result;
}

export const edittour = async (options) => {
  const result = await post("tours/edit", options);
  return result;
}

export const getCateID = async () => {
  const result = await get("tourcate/cateID");
  return result;
}

export const deltour = async (id) => {
  const result = await del(`tours/deltour/${id}`);
  return result;
}

export const getbySearch = async (keyword) => {
  const result = await get(`tours/search-by-category?keyword=${keyword}`);
  return result;
}