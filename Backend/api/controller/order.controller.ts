import { Request, Response } from "express";
import { generateOrderCode } from "../../helpers/genarateCodeOrder"; // tao ma code don hang
import Orders from "../models/order.model";

//[POST] /order/saveOrder
export const postOrder = async (req: Request, res: Response) => {
  const data = req.body;
  const count = await Orders.count();

  for (const [index, item] of data.cart.entries()) {
    const dataOrder = {
      code: generateOrderCode(count + 1 + index),
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      note: data.note,
      status: "initial",
      quantity: item.quantity,
      totalPrice: item.price,
      date: item.date + " " + item.time,
      title: item.title,
      userID: data.uID
    };

    await Orders.create(dataOrder);
  }
  res.json({code: 200})
}
//[GET] /order/getorder/:id
export const getorder = async (req: Request, res: Response) => {
  const userID = req.params.id;

  const getOrder = await Orders.findAll({
    where: {
      userID: userID
    }
  });
  res.json(getOrder);
}
//[GET] /api/order/getallorder
export const getAllOrder = async (req: Request, res: Response) => {
  const order = await Orders.findAll();
  res.json(order);
}

//[DELETE] /api/order/delorder/:id// admin 
export const delOrder = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await Orders.destroy({
    where: {
      id: id
    }
  })
  res.json({ code: 200 });
}