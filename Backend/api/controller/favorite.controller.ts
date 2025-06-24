import { Request, Response } from "express";
import Favorite from "../models/favorite.model";

//[POST] /api/favorite/addfavorite
export const addfavorite = async (req: Request, res: Response) => {
  const userID: Number = req.body.userID;
  const title: String = req.body.title;
  const images: String = req.body.images;
  const startPlace: String = req.body.startPlace;
  const information: String = req.body.information;
  const price: Number = req.body.price;
  const schedule: String = req.body.schedule;
  const discount: Number = req.body.discount;
  const slug: String = req.body.slug;
  const code: String = req.body.code;
  const liked: Boolean = req.body.liked;

  const favorite = await Favorite.findOne({
    where: {
      userID: userID,
      code: code
    }
  });

  if (favorite) {
    await Favorite.destroy({
      where: {
        code: code
      }
    })

    res.json({
      status: "unliked"
    });
    return;
  };

  const newFavorite = {
    userID,
    title,
    images,
    startPlace,
    information,
    price,
    schedule,
    discount,
    slug,
    code
  };

  await Favorite.create(newFavorite);

  res.json({
    status: "liked",
  })

}

//[GET] /api/category/getfavorite/:userID
export const getfavorite = async (req: Request, res: Response) => {
  const userID = req.params.userID;
  const favorite = await Favorite.findAll({
    where: {
      userID: userID
    }
  })
  res.json(favorite);
}