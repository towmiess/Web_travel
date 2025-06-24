import axios from 'axios';
import crypto from 'crypto';
import { Request, Response } from 'express';
import Orders from '../models/order.model';

//[POST] /api/pays/payment
export const payment = async (req: Request, res: Response): Promise<void> => {
  const price = req.body.price;
  const id = req.body.orderID;
  const userID = req.body.userID;

  var accessKey = 'F8BBA842ECF85';
  var secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
  var orderInfo = 'pay with MoMo';
  var partnerCode = 'MOMO';
  var redirectUrl = `https://989b-27-66-89-154.ngrok-free.app/success/${userID}`;
  var ipnUrl = 'https://9068-27-66-89-154.ngrok-free.app/api/pays/callback';
  var requestType = "payWithMethod";
  var amount = price;
  var orderId = id + "-" + partnerCode + new Date().getTime();
  var requestId = orderId;
  var extraData = ' ';
  var orderGroupId = ' ';
  var autoCapture = true;
  var lang = 'vi';

  // Tạo raw signature
  var rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;

  const signature = crypto
    .createHmac('sha256', secretKey)
    .update(rawSignature)
    .digest('hex');

  const body = JSON.stringify({
    partnerCode,
    partnerName: "Test",
    storeId: "MomoTestStore",
    requestId,
    amount,
    orderId,
    orderInfo,
    redirectUrl,
    ipnUrl,
    lang,
    requestType,
    autoCapture,
    extraData,
    orderGroupId,
    signature
  });

  const options = {
    method: "POST",
    url: "https://test-payment.momo.vn/v2/gateway/api/create",
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body)
    },
    data: body
  }

  try {
    let result = await axios(options);
    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "server error"
    })
  }
};
//[POST] /api/pays/callback
export const callbackpay = async (req: Request, res: Response): Promise<void> => {
  const orderIDPay = parseInt(req.body.orderId.split('-')[0]);
  const checkPay = req.body.resultCode;
  if(checkPay === 0){
    const order = await Orders.findOne({
      where: {
        id: orderIDPay
      }
    });
    if(order){
      await order.update({
        status: "active"
      })
    }
  }
  

  res.status(200).json(req.body)
}