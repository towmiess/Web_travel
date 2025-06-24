import { useEffect, useState } from "react";
import { delCart, delOneCart, getCart } from "../../services/cartServices";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../heaper/cookie";
import { orderSave } from "../../services/orderServices";
import { BsFillCartCheckFill } from "react-icons/bs";
import Swal from 'sweetalert2';
import imgs from "../../images/img-section-about.jpg";
import "./Cart.scss";

function Cart() {
  const navigate = useNavigate();
  const params = useParams()
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getCart(params.userID);
      setCart(response);
    }
    fetchApi();
  }, [params]);

  const total = cart.reduce((sum, item) => sum + (item.price), 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const phone = e.target[1].value;
    const email = e.target[2].value;
    const note = e.target[3].value;
    const uID = parseInt(getCookie("id"));

    const options = {
      fullName,
      phone,
      email,
      note,
      cart: cart,
      totalPrice: total,
      uID
    }

    const response = await orderSave(options);
    if (response.code === 200) {
      Swal.fire({
        icon: "success",
        title: "Đặt Tour Thành Công",
        showConfirmButton: false,
        timer: 1500
      });

      await delCart(params.userID);
      navigate("/success/" + params.userID);
    }
  }

  const handleClick = async (tourID) => {
    Swal.fire({
      title: 'Bạn có chắc muốn xóa tour này?',
      text: 'Hành động này không thể hoàn tác!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Có, xóa!',
      cancelButtonText: 'Hủy'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await delOneCart(tourID); // Gọi API xóa

        Swal.fire({
          title: 'Xóa Tour Thành Công!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate("/cart/" + params.userID); // Reload lại trang/cart
        });
      }
    });
  };

  return (
    <>
      {cart && (
        <div className="container my-3">
          <div className="row">
            <div className="col-6">
              <div className="box-head">
                <div className="inner-title">
                  Danh sách giỏ hàng
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="box-head text-end align-middle">
                <NavLink to={"/success/" + params.userID} className="fs-2"><BsFillCartCheckFill /></NavLink>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered text-center align-middle">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Ảnh</th>
                    <th>Tiêu đề</th>
                    <th>Ngày khởi hành</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                {cart.map((item, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{index + 1}</td>
                      <td><img src={item.images} alt="" width="100px" /></td>
                      <td>{item.title}</td>
                      <td>{item.date} {item.time}</td>
                      <td>{item.quantity}</td>
                      <td>{(item.price).toLocaleString()}đ</td>
                      <td><button className="btn btn-sm btn-danger" onClick={() => handleClick(item.tourID)} >Xóa</button></td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <h5 className="text-end mb-4"><span className=" fw-bold">Tổng đơn hàng:</span> <span style={{ color: '#c12026' }}>{total.toLocaleString()}đ</span></h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="box-head">
                <div className="inner-title">
                  Thông tin khách hàng
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="infor-use">
                <div className="form">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="fullname">Họ tên</label>
                      <input type="text" className="form-control" id="fullname" placeholder="Nhập họ tên" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Số điện thoại</label>
                      <input type="text" className="form-control" id="phone" placeholder="Nhập số điện thoại" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" className="form-control" id="email" placeholder="Nhập địa chỉ email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="note">Ghi chú</label>
                      <textarea type="text" className="form-control" id="note" placeholder="Nhập địa ghi chú" rows={2} />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-order">ĐẶT TOUR</button>
                    </div>
                  </form>
                  <div className="description" style={{ marginTop: 45 }}>
                    Hãy tận hưởng những chuyến đi tuyệt vời cùng bạn bè và người thân trong mùa hè này, Sky Tour luôn đồng hành và hỗ trợ tận tâm quý khách hàng
                  </div>
                  <div className="description">
                    Đừng ngần ngại mà nhấn vào nút đặt tour ngay thôi nào!
                  </div>
                </div>
                <img src={imgs} alt="" style={{ width: 700 }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Cart;