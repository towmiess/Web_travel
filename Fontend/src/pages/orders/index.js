import { useEffect, useState } from "react";
import { getorder } from "../../services/orderServices";
import { useParams } from "react-router-dom";
import { IoRadioButtonOnOutline } from "react-icons/io5";
import { getCookie } from "../../heaper/cookie";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import "./order.scss";
import { payment } from "../../services/payServices";
dayjs.extend(utc);
dayjs.extend(timezone);

function Orders() {
  const userID = parseInt(getCookie("id"));
  const params = useParams();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getorder(params.uID);
      setOrder(response);
    }
    fetchApi();
  }, [params])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const price = e.target[0].value;
    const orderID = e.target[1].value;
    const option = {
      price,
      orderID,
      userID
    }

    const response = await payment(option);
    if (response) {
      window.location.href = response.payUrl;
    }

  }
  return (
    <>
      {order && (
        <div className="container my-3" style={{ padding: "0 120px 0 120px" }}>
          <div style={{ margin: "30px 0 20px 0", fontSize: 28, fontWeight: 700 }}>Thông tin các đơn hàng</div>
          {order.map((item, index) => (
            <div className="infor-order" key={index}>
              <div className="row" >
                <div className="col-12">
                  <div className="alert alert-success">
                    <div style={{ marginLeft: 400 }}>
                      ĐƠN HÀNG <b>{item.code}</b>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="title">Tên người đặt: </div>
                </div>
                <div className="col-6">
                  <div className="infor">{item.fullName}</div>
                </div>
                <div className="col-6">
                  <div className="title">Số điện thoại:</div>
                </div>
                <div className="col-6">
                  <div className="infor">{item.phone}</div>
                </div>
                <div className="col-6">
                  <div className="title">Địa chỉ email: </div>
                </div>
                <div className="col-6">
                  <div className="infor">{item.email}</div>
                </div>
                <div className="col-6">
                  <div className="title">Tour du lịch: </div>
                </div>
                <div className="col-6">
                  <div className="infor">{item.title} </div>
                </div>
                <div className="col-6">
                  <div className="title">Số lượng vé:</div>
                </div>
                <div className="col-6">
                  <div className="infor">{item.quantity}</div>
                </div>
                <div className="col-6">
                  <div className="title">Tổng tiền:</div>
                </div>
                <div className="col-6">
                  <div className="infor">{item.totalPrice.toLocaleString()}₫</div>
                </div>
                <div className="col-6">
                  <div className="title">Ngày khởi hành:</div>
                </div>
                <div className="col-6">
                  <div className="infor">{item.date}</div>
                </div>
                <div className="col-6">
                  <div className="title">Ngày tạo đơn:</div>
                </div>
                <div className="col-6">
                  <div className="infor">{dayjs.utc(item.createdAt).tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY HH:mm:ss')}</div>
                </div>
                <div className="col-6">
                  <div className="title">Trạng thái: </div>
                </div>
                <div className="col-6">
                  {item.status === "active" ? (
                    <div className="infor" style={{ display: "flex", alignItems: "center" }}><IoRadioButtonOnOutline style={{ color: "#28a745", marginRight: 3 }} />Đã thanh toán thành công </div>
                  ) : (
                    <div className="infor" style={{ display: "flex", alignItems: "center" }}><IoRadioButtonOnOutline style={{ color: "#6f42c1", marginRight: 3 }} />Chờ thanh toán </div>
                  )}
                </div>
                <div className="payment">
                  {item.status === "active" ? (
                    <>
                      <form onSubmit={handleSubmit}>
                        <input type="number" defaultValue={item.totalPrice} style={{ display: "none" }} />
                        <input type="number" defaultValue={item.id} style={{ display: "none" }} />
                      </form>
                    </>
                  ) : (
                    <>
                      <form onSubmit={handleSubmit}>
                        <input type="number" defaultValue={item.totalPrice} style={{ display: "none" }} />
                        <input type="number" defaultValue={item.id} style={{ display: "none" }} />
                        <button type="submit">Thanh toán</button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
export default Orders;