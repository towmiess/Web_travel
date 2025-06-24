import { useEffect, useState } from "react";
import { getTour } from "../../services/tourServices";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import Video from "../../components/video";
import Body from "../../components/body/main-body";
import Activity from "../../components/body/activity";
import { getCookie } from "../../heaper/cookie";
import { addfavorite, getfavorite } from "../../services/favoriteService";
import Swal from "sweetalert2";
import "./home.scss";

function Home() {
  const order = ""; const cateSlug = ""; const sortBy = "";
  const [tour, setTour] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const userID = parseInt(getCookie("id"));

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      userID,
      title: e.target[0].value,
      images: e.target[1].value,
      startPlace: e.target[2].value,
      information: e.target[3].value,
      price: e.target[4].value,
      schedule: e.target[5].value,
      discount: e.target[6].value,
      slug: e.target[7].value,
      code: e.target[8].value,
    }

    const response = await addfavorite(options);
    if (response.status === "unliked") {
      const updatedFavorites = await getfavorite(userID); // lấy lại danh sách
      setFavorite(updatedFavorites); // cập nhật lại state

      Toast.fire({
        icon: "success",
        title: "Đã xóa khỏi mục yêu thích"
      });
    } else {
      const updatedFavorites = await getfavorite(userID); // lấy lại danh sách sau khi thêm
      setFavorite(updatedFavorites); // cập nhật lại state

      Toast.fire({
        icon: "success",
        title: "Đã thêm vào mục yêu thích"
      });
    }
  }

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getfavorite(userID);
      setFavorite(response);
    }
    fetchApi();
  }, [userID])

  const favoriteCode = new Set(favorite.map(f => f.code));

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getTour(cateSlug, sortBy, order);
      setTour(response);
    }
    fetchApi();
  }, [cateSlug, sortBy, order])

  const eightTours = tour.slice(0, 8);
  return (
    <>
      <div>
        <Video />
      </div>
      <div >
        <Body />
      </div>
      <div className="container">
        <div className="alltour-top">
          <div className="alltour-top__title">
            <div className="alltour-top__title-text">Tour nổi bật</div>
            <div className="alltour-top__title-desc">Hơn 1000 tour đa dạng giá có thời hạn</div>
          </div>
          <div className="alltour-top__link">
            <NavLink to="/alltour">Xem thêm <FaArrowRight className="alltour-top__link-icon" /></NavLink>
          </div>
        </div>
        {eightTours && (
          <div className="alltour-bottom">
            <div className="row">
              {eightTours.map((item, index) => (
                <div className="col-3" key={index}>
                  <div className="alltour-bottom__card">
                    <NavLink to={"/detail/" + item.slug}>
                      <div className="alltour-bottom__card-item" >
                        <div className="alltour-bottom__card-item-containe-image">
                          <img src={item.images} alt="" />
                        </div>
                        <div className="alltour-bottom__card-item-location">
                          <IoLocationOutline className="alltour-bottom__card-item-location-icon" />
                          <span>Khởi hành từ: {item.startPlace}</span>
                        </div>
                        <div className="alltour-bottom__card-item-title">{item.title}</div>
                        <div className="alltour-bottom__card-item-desc">{item.information}</div>
                        <div className="alltour-bottom__card-item-price">{(item.price * (100 - item.discount) / 100).toLocaleString()}₫ <span>{item.price.toLocaleString()}₫</span></div>
                        <div className="alltour-bottom__card-item-time">
                          <IoMdTime className="alltour-bottom__card-item-time-icon" />
                          <span>Thời gian: {item.schedule}</span>
                        </div>
                        <div className="alltour-bottom__card-item-sale">-{item.discount}%</div>
                      </div>
                    </NavLink>
                    <form onSubmit={handleSubmit}>
                      <input style={{ display: 'none' }} type="text" defaultValue={item.title} />
                      <input style={{ display: 'none' }} type="text" defaultValue={item.images} />
                      <input style={{ display: 'none' }} type="text" defaultValue={item.startPlace} />
                      <input style={{ display: 'none' }} type="text" defaultValue={item.information} />
                      <input style={{ display: 'none' }} type="number" defaultValue={item.price} />
                      <input style={{ display: 'none' }} type="text" defaultValue={item.schedule} />
                      <input style={{ display: 'none' }} type="number" defaultValue={item.discount} />
                      <input style={{ display: 'none' }} type="text" defaultValue={item.slug} />
                      <input style={{ display: 'none' }} type="text" defaultValue={item.code} />
                      <button className="heart" type="submit">
                        {favoriteCode.has(item.code) ? (
                          <IoMdHeart className="fill-heart" />
                        ) : (
                          <IoMdHeartEmpty className="empty-heart" />
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Activity />
    </>
  )
}

export default Home;