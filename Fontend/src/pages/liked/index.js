import { IoLocationOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import "./liked.scss";
import { useEffect, useState } from "react";
import { getfavorite } from "../../services/favoriteService";
import { getCookie } from "../../heaper/cookie";

function Liked() {
  const [likedTour, setLikedTour] = useState([]);
  const userID = parseInt(getCookie("id"));

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getfavorite(userID);
      setLikedTour(response);
    }
    fetchApi();
  }, [userID]);

  return (
    <>
      <div className="container minheight-liked">
        <div className="liked-tour-top">
          <div className="alltour-top__title">
            <div className="alltour-top__title-text">Danh sách Tour yêu thích</div>
            <div className="alltour-top__title-desc">Hãy tận hưởng những chuyến đi mà mình mong muốn nào!</div>
          </div>
        </div>
        {likedTour && (
          <div className="liked-tour-bottom">
            <div className="row">
              {likedTour.map((item, index) => (
                <div className="col-6" key={index}>
                  <NavLink to="/" className="liked-tour-bottom__card">
                    <div className="liked-tour-bottom__card-img">
                      <img src={item.images} alt="" />
                    </div>
                    <div className="liked-tour-bottom__card-contentleft">
                      <div className="alltour-bottom__card-item-location">
                        <IoLocationOutline className="alltour-bottom__card-item-location-icon" />
                        <span>Khởi hành từ: {item.schedule}</span>
                      </div>
                      <div className="alltour-bottom__card-item-title">{item.title}</div>
                      <div className="alltour-bottom__card-item-desc">{item.information}</div>
                      <div className="alltour-bottom__card-item-price">{(item.price * (100 - item.discount) / 100).toLocaleString()}₫<span>{(item.price).toLocaleString()}₫</span></div>
                      <div className="alltour-bottom__card-item-time">
                        <IoMdTime className="alltour-bottom__card-item-time-icon" />
                        <span>Thời gian: {item.startPlace}</span>
                      </div>
                      <div className="liked-tour-bottom__card-leftsale">-{item.discount}%</div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default Liked;