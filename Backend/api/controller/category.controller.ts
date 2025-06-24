import { Request, Response } from "express";
import Category from "../models/category.model";

//[GET] /api/category
export const index = async (req: Request, res: Response) => {
  const categories = await Category.findAll({
    where: {
      deleted: false,
      status: "active"
    }
  })
  res.json(categories);
};
//[GET] /api/category/getallcate
export const getAllCate = async (req: Request, res: Response) => {
  const categories = await Category.findAll({
    where: {
      deleted: false,
    }
  })
  res.json(categories);
};
//[GET] /api/category/:oneCate
export const cateSlug = async (req: Request, res: Response) => {
  const slug = req.params.oneCate;
  const category = await Category.findOne({
    where: {
      slug: slug,
      deleted: false,
      status: "active"
    }
  })
  res.json(category);
}
//[POST] /api/category/addcate
export const addcate = async (req: Request, res: Response) => {
  const newCate = {
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    status: req.body.status
  }

  await Category.create(newCate);
  res.json({code: 200});
}
//[POST] /api/category/editcate
export const editcategory = async (req: Request, res: Response) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  const image = req.body.image;
  const status = req.body.status;

  const category = await Category.findOne({
    where: {
      id: id
    }
  })

  const categoryFieldsToUpdate: any = {};
  if (title !== undefined && (category as any).title !== title) categoryFieldsToUpdate.title = title;
  if (image !== undefined && (category as any).images !== image) categoryFieldsToUpdate.image = image;
  if (status !== undefined && (category as any).status !== status) categoryFieldsToUpdate.status = status;
  if (description !== undefined && (category as any).description !== description) categoryFieldsToUpdate.description = description;

  // Cập nhật bảng category nếu có thay đổi
  if (Object.keys(categoryFieldsToUpdate).length > 0) {
    await (category as any).update(categoryFieldsToUpdate);
  }

  res.json({ message: "Sửa category thành công", code: 200});
}
//[DELETE] /api/categoty/delcate/:id
export const delcategory = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await Category.destroy({
    where: {
      id: id
    }
  })
  res.json({code: 200});
}