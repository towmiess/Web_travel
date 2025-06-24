import { Request, Response } from "express";
import Cart from "../models/cart.model";

//[post] /api/cart/addcart
export const addcart = async (req: Request, res: Response) => {
  const images = req.body.images;
  const price = req.body.price;
  const title = req.body.title;
  const code = req.body.code;
  const quantity = req.body.quantity;
  const userID = req.body.userID;
  const tourID = req.body.tourID;
  const date = req.body.date;
  const time = req.body.time;

  const cart = await Cart.findOne({
    where: {
      tourID: tourID,
      userID: userID
    }
  })

  if (cart) {
    const updateQuantity = (cart as any).quantity + Number(quantity);

    await cart.update({
      quantity: updateQuantity
    });

    res.json({
      code: 200,
      message: "Cập nhật giỏ hàng thành công"
    });
    return;
  }

  const newCart = {
    images: images,
    price: price,
    title: title,
    code: code,
    quantity: quantity,
    userID: userID,
    tourID: tourID,
    date: date,
    time: time
  }
  await Cart.create(newCart);
  res.json({
    code: 200,
    message: "Thêm vào giỏ hàng thành công"
  }
  )
}
//hiển thị ra giao diện: [GET] /api/cart/getcart/:id
export const getcart = async (req: Request, res: Response) => {
  const userID = req.params.id;
  const carts = await Cart.findAll({
    where: {
      userID: userID
    }
  })
  res.json(carts);
}

//[DELETE] /api/cart/delcart/:id
export const delCart = async (req: Request, res: Response) => {
  const userID = req.params.id;

  await Cart.destroy({
    where: {
      userID: userID
    }
  })
  res.json({
    code: 200,
  });
}
//[DELETE] /api/cart/delOnecart/:tourID
export const delOneCart = async (req: Request, res: Response) => {
  const tourID = req.params.tourID;
  
  await Cart.destroy({
    where: {
      tourID: tourID
    }
  })
  res.json({
    code: 200,
    message: "Xóa Tour thành công!"
  });
}
