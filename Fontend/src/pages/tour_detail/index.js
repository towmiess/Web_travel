import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTourDetail } from "../../services/tourServices";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { getCookie } from "../../heaper/cookie";
import { addtocart } from "../../services/cartServices";
import { DatePicker, Space } from 'antd';
import Swal from "sweetalert2";
import "./detail.scss";

function TourDetail() {
  const token = getCookie("token");
  const uID = getCookie("id");
  const params = useParams();
  const [inputNum, setInputnum] = useState(1);
  const [inputNumChild, setInputNumChild] = useState(0);

  const navigate = useNavigate();
  const [tourDetail, setTourDetail] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getTourDetail(params.slugOne);
      setTourDetail(response);
    }
    fetchApi();
  }, [params])

  const handleDecrease = () => {
    if (inputNum > 1) {
      const pev = inputNum - 1;
      setInputnum(pev);
    }
  }

  const handleDecreaseChild = () => {
    if (inputNumChild > 0) {
      const pev = inputNumChild - 1;
      setInputNumChild(pev);
    }
  }

  const handleIncreaseChild = () => {
    setInputNumChild(inputNumChild + 1);
  }

  const handleIncrease = () => {
    const pev = inputNum + 1;
    setInputnum(pev);
  }
  const priceSale = tourDetail.price * (1 - tourDetail.discount / 100);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const quantity = inputNum + inputNumChild;
    const userID = parseInt(uID);
    const images = tourDetail.images;
    const price = (priceSale * inputNum) + ((priceSale * 0.8) * inputNumChild);
    const title = tourDetail.title;
    const code = tourDetail.code;
    const tourID = tourDetail.id;
    const date = e.target[0].value;
    const time = tourDetail.timeStart;

    const option = {
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
    if (token) {
      await addtocart(option);
      Swal.fire({
        icon: "success",
        title: "Thêm Vào Giỏ Hàng Thành Công",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        navigate("/cart/" + uID);
      }, 1500);
    }
    else {
      navigate("/login");
    }
  }
  return (
    <>
      <div className="container">
        {tourDetail && (
          <div>
            <div className="detail-top">
              <div className="detail-top__title">{tourDetail.title}</div>
              <div className="detail-top__menu">
                <div className="detail-top__menu-item">
                  <div className="detail-top__menu-item-icon"><MdOutlineLocationOn className="icon" /></div>
                  <div className="detail-top__menu-item-content">
                    <div className="detail-top__menu-item-content-title">Khởi hành từ</div>
                    <div className="detail-top__menu-item-content-desc">{tourDetail.startPlace}</div>
                  </div>
                </div>
                <div className="detail-top__menu-item">
                  <div className="detail-top__menu-item-icon"><TbCalendarClock className="icon" /></div>
                  <div className="detail-top__menu-item-content">
                    <div className="detail-top__menu-item-content-title">Thời gian</div>
                    <div className="detail-top__menu-item-content-desc">{tourDetail.schedule}</div>
                  </div>
                </div>
                <div className="detail-top__menu-item">
                  <div className="detail-top__menu-item-icon"><FaUser className="icon" /></div>
                  <div className="detail-top__menu-item-content">
                    <div className="detail-top__menu-item-content-title">Số chỗ còn</div>
                    <div className="detail-top__menu-item-content-desc">{tourDetail.stock}</div>
                  </div>
                </div>
                <div className="detail-top__menu-item">
                  <div className="detail-top__menu-item-icon"><FaRegClock className="icon" /></div>
                  <div className="detail-top__menu-item-content">
                    <div className="detail-top__menu-item-content-title">Bắt đầu từ</div>
                    <div className="detail-top__menu-item-content-desc">{tourDetail.timeStart}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-middle">
              <div className="detail-middle-img">
                <img src={tourDetail.images} alt="" />
              </div>
              <div className="detail-middle-desc">
              </div>
              <div className="detail-middle-right">
                <div className="detail-middle-right-title">{priceSale.toLocaleString()}₫</div>
                <div className="detail-middle-right-code">Mã tour: <span>{tourDetail.code}</span></div>
                <form onSubmit={handleSubmit}>
                  <div className="detail-middle-right-date">
                    <div className="detail-middle-right-date-icon">
                      <TbCalendarClock className="icon-date" />
                    </div>
                    <Space direction="vertical">
                      <DatePicker
                        placeholder="Chọn ngày đi"
                        className="input-date"
                        suffixIcon={null}
                        format={{
                          format: 'DD-MM-YYYY',
                        }}
                      />
                    </Space>
                  </div>
                  <div className="customer-option">Loại khách</div>
                  <div className="detail-middle-right-quantity">
                    <div className="input-label">Người lớn</div>
                    <div className="input-number">
                      <span onClick={handleDecrease} style={{ cursor: "pointer", userSelect: "none", fontSize: 20 }}>-</span>
                      <span>{inputNum}</span>
                      <span onClick={handleIncrease} style={{ cursor: "pointer", userSelect: "none", fontSize: 20 }}>+</span>
                    </div>
                    <div className="price">{priceSale.toLocaleString()}₫</div>
                  </div>
                  <div className="detail-middle-right-quantity" style={{ borderBottom: "1px solid #ddd" }}>
                    <div className="input-label">Trẻ em</div>
                    <div className="input-number">
                      <span onClick={handleDecreaseChild} style={{ cursor: "pointer", userSelect: "none", fontSize: 20 }}>-</span>
                      <span>{inputNumChild}</span>
                      <span onClick={handleIncreaseChild} style={{ cursor: "pointer", userSelect: "none", fontSize: 20 }}>+</span>
                    </div>
                    <div className="price">{(priceSale * 0.8).toLocaleString()}₫</div>
                  </div>
                  <div className="detail-middle-right-total">
                    <div className="detail-middle-right-total-title">Tổng tiền: </div>
                    <span>{((priceSale * inputNum) + ((priceSale * 0.8) * inputNumChild)).toLocaleString()}₫</span>
                  </div>
                  <div className="button-submit-form">
                    <button className="detail-middle-right-button" type="submit">Thêm Tour</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default TourDetail;