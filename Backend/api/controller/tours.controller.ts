import { Request, Response } from "express";
import Tours from "../models/tours.model";
import sequelize from "../../config/database";
import { QueryTypes } from "sequelize";
import { generateTourCode } from "../../helpers/genarateCodeOrder";
import TourCategory from "../models/tour_categories.model";
import Category from "../models/category.model";

//lấy tour không có điều kiện: [GET] /api/tours/allTour
export const getalltour = async (req: Request, res: Response) => {
  const allTour = await Tours.findAll({
    where: {
      deleted: false,
    }
  })

  res.json(allTour);
}
//lấy tour có điều kiện lọc: [GET] /api/tours?sortBy=${sortBy}&order=${order}
export const index = async (req: Request, res: Response) => {
  try {
    const { sortBy, order, slugCategory } = req.query;

    const validFields = ['title', 'price', 'discount'];
    const validOrders = ['ASC', 'DESC'];

    let orderOption;
    if (
      sortBy &&
      order &&
      validFields.includes(sortBy as string) &&
      validOrders.includes((order as string).toUpperCase())
    ) {
      orderOption = [[sortBy as string, (order as string).toUpperCase()]];
    }

    // Nếu có slugCategory, lọc bằng raw SQL (tối ưu JOIN và tính giá khuyến mãi)
    if (slugCategory) {
      const toursCate = await sequelize.query(
        `
        SELECT tours.*, ROUND(price * (1 - discount/100), 0) AS price_special
        FROM tours
        JOIN tours_categories ON tours.id = tours_categories.tour_id
        JOIN categories ON tours_categories.category_id = categories.id
        WHERE
          categories.slug = :slugCategory
          AND categories.deleted = false
          AND categories.status = 'active'
          AND tours.deleted = false
          AND tours.status = 'active'
        ${orderOption ? `ORDER BY ${sortBy} ${order.toString().toUpperCase()}` : ''}
        `,
        {
          replacements: { slugCategory },
          type: QueryTypes.SELECT,
        }
      );

      res.status(200).json(toursCate);
    } else {
      const tours = await Tours.findAll({
        where: {
          deleted: false,
          status: 'active',
        },
        ...(orderOption && { order: orderOption }),
      });
      res.status(200).json(tours);
    }

  } catch (err) {
    console.error('Error fetching tours:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//Tìm kiếm: [GET] /api/tours/search-by-category?keyword=${keyword}
export const searchByCategory = async (req: Request, res: Response) => {
  try {
    const { keyword } = req.query;

    if (!keyword || typeof keyword !== "string" || keyword.trim() === "") {
      res.status(200).json([]);
    } else {
      const lowerKeyword = keyword.toLowerCase().trim();

      const categories = await Category.findAll({
        where: {
          deleted: false,
          status: "active",
        },
      });

      const match = categories.find((c: any) =>
        c.title.toLowerCase().includes(lowerKeyword)
      );

      if (!match) {
        res.status(200).json([]);
      } else {
        const tours = await sequelize.query(
          `
          SELECT tours.*, ROUND(price * (1 - discount/100), 0) AS price_special
          FROM tours
          JOIN tours_categories ON tours.id = tours_categories.tour_id
          JOIN categories ON tours_categories.category_id = categories.id
          WHERE
            categories.slug = :slugCategory
            AND categories.deleted = false
            AND categories.status = 'active'
            AND tours.deleted = false
            AND tours.status = 'active'
          `,
          {
            replacements: { slugCategory: (match as any).slug },
            type: QueryTypes.SELECT,
          }
        );

        res.status(200).json(tours);
      }
    }
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



//tour detail: [GET] /api/tours/detail/:slugTour
export const tourDetail = async (req: Request, res: Response) => {
  const slugTour = req.params.slugTour;
  const tourDetail = await Tours.findOne({
    where: {
      slug: slugTour,
      deleted: false,
      status: "active"
    }
  });
  res.json(tourDetail);
}

//thêm tour mới: [POST] /api/tours/addtour
export const addtour = async (req: Request, res: Response) => {
  const category_id = req.body.category_id;
  const count = await Tours.count();

  const newtour = {
    title: req.body.title,
    code: generateTourCode(count + 1),
    images: req.body.images,
    price: req.body.price,
    discount: req.body.discount,
    information: req.body.information,
    schedule: req.body.schedule,
    timeStart: req.body.timeStart,
    stock: req.body.stock,
    status: req.body.status,
    startPlace: req.body.startPlace
  }
  const tour = await Tours.create(newtour);
  const tour_id = tour["id"];
  const TourCate = {
    tour_id,
    category_id
  }

  await TourCategory.create(TourCate);
  res.json({ message: "Thêm Tour thành công", code: 200 });
}

//sửa tour: [POST] /api/tours/edit
export const edittour = async (req: Request, res: Response) => {
  const category_id = req.body.category_id;
  const id = req.body.id;
  const title = req.body.title;
  const images = req.body.images;
  const price = req.body.price;
  const discount = req.body.discount;
  const information = req.body.information;
  const schedule = req.body.schedule;
  const timeStart = req.body.timeStart;
  const stock = req.body.stock;
  const status = req.body.status;
  const startPlace = req.body.startPlace;

  const tour = await Tours.findOne({
    where: {
      id: id
    }
  })

  const tourFieldsToUpdate: any = {};
  if (title !== undefined && (tour as any).title !== title) tourFieldsToUpdate.title = title;
  if (images !== undefined && (tour as any).images !== images) tourFieldsToUpdate.images = images;
  if (price !== undefined && (tour as any).price !== price) tourFieldsToUpdate.price = price;
  if (discount !== undefined && (tour as any).discount !== discount) tourFieldsToUpdate.discount = discount;
  if (information !== undefined && (tour as any).information !== information) tourFieldsToUpdate.information = information;
  if (schedule !== undefined && (tour as any).schedule !== schedule) tourFieldsToUpdate.schedule = schedule;
  if (timeStart !== undefined && (tour as any).timeStart !== timeStart) tourFieldsToUpdate.timeStart = timeStart;
  if (stock !== undefined && (tour as any).stock !== stock) tourFieldsToUpdate.stock = stock;
  if (status !== undefined && (tour as any).status !== status) tourFieldsToUpdate.status = status;
  if (startPlace !== undefined && (tour as any).startPlace !== startPlace) tourFieldsToUpdate.startPlace = startPlace;

  // Cập nhật bảng Tours nếu có thay đổi
  if (Object.keys(tourFieldsToUpdate).length > 0) {
    await (tour as any).update(tourFieldsToUpdate);
  }

  const tour_cate = await TourCategory.findOne({
    where: {
      tour_id: id
    }
  })
  // Cập nhật category_id nếu có thay đổi
  if (category_id !== undefined && (tour_cate as any).category_id !== category_id) {
    await (tour as any).update({ category_id });
  }

  res.json({ message: "Sửa Tour thành công", code: 200 });
}

//lấy danh sách bảng Tours_Categories: [GET] /api/tours/getIDCate
export const getIDCategory = async (req: Request, res: Response) => {
  const tourcate = await TourCategory.findAll({})
  res.json(tourcate)
}

//xóa tour: [DELETE] /api/tours/deltour/:id
export const deltour = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await TourCategory.destroy({
    where: {
      tour_id: id
    }
  })
  await Tours.destroy({
    where: {
      id: id
    }
  })
  res.json({ code: 200 });
}

