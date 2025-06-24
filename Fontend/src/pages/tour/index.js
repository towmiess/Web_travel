import { useEffect, useState } from "react";
import { getTour } from "../../services/tourServices";
import { addfavorite, getfavorite } from "../../services/favoriteService";
import { IoMdHeart, IoMdHeartEmpty, IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { getCookie } from "../../heaper/cookie";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { Select } from "antd";
import { AiOutlineSortAscending } from "react-icons/ai";
import { AiOutlineSortDescending } from "react-icons/ai";
import "./alltour.scss"
import { getCategory } from "../../services/categoryServices";
function Tour() {
  const [allTour, setAllTour] = useState([]);
  const [category, setCategory] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [sortBy, setSortBy] = useState("");
  const [increase, setIncrease] = useState(true);
  const [cateSlug, setCateSlug] = useState("");

  const handleChangeSortBy = (value) => {
    setSortBy(value);
  }
  const handleChangeSelect = (value) => {
    setCateSlug(value);
  }
  const handleClickSort = () => {
    const newIncrease = !increase;
    setIncrease(newIncrease);
    setOrder(newIncrease ? "ASC" : "DESC");
  };

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

  //gửi thông tin tour yêu thích lên server
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
  //lấy danh sách các tour yêu thích
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getfavorite(userID);
      setFavorite(response);
    }
    fetchApi();
  }, [userID])

  //lấy ra mã tour yêu thích
  const favoriteCode = new Set(favorite.map(f => f.code));

  //lấy dữ liệu toàn bộ tour
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getTour(cateSlug, sortBy, order);
      setAllTour(response);
    }
    fetchApi();
  }, [cateSlug, sortBy, order]);
  //lấy dữ liệu category
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getCategory();
      setCategory(response);
    }
    fetchApi();
  }, [])
  //lấy ra 2 trường title và slug trong category
  const cateOption = [
    { title: "All", slug: "" },
    ...category.map(item => ({
      title: item.title,
      slug: item.slug
    }))
  ];
  return (
    <>
      <div className="container">
        <div className="alltour-top" style={{ marginTop: '30px' }}>
          <div className="alltour-top__title">
            <div className="alltour-top__title-text">Danh sách tour du lịch</div>
            <div className="alltour-top__title-desc">Hơn 1000 tour đa dạng giá có thời hạn</div>
          </div>
          <div className="alltour-top__cate">
            <Select
              defaultValue=""
              style={{ width: 200 }}
              value={cateSlug}
              onChange={(value) => handleChangeSelect(value)}
              options={cateOption?.map((item) => ({
                value: item.slug,
                label: item.title
              }))}
            />
          </div>
          <div className="alltour-top__sort">
            <div style={{ marginRight: 10 }}>
              <span style={{ fontSize: 16, marginRight: 10 }}>Sắp xếp theo</span>
              <Select
                style={{ width: 120 }}
                placeholder="chọn mục"
                onChange={handleChangeSortBy}
                options={[
                  { value: 'title', label: 'Tên Tour' },
                  { value: 'price', label: 'Giá' },
                  { value: 'discount', label: 'Giảm giá' },
                ]}
              />
            </div>
            <div className="allltour-top__sort-order">
              <span onClick={handleClickSort}>
                {increase ? (<>
                  <AiOutlineSortAscending style={{ fontSize: 26, userSelect: "none" }} />
                </>) : (<>
                  <AiOutlineSortDescending style={{ fontSize: 26, userSelect: "none" }} />
                </>)}
              </span>
            </div>
          </div>
        </div>
        {allTour && (
          <div className="alltour-bottom">
            <div className="row">
              {allTour.map((item, index) => (
                <div className="col-3" key={`${item.slug}-${index}`}>
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
    </>
  )
}

export default Tour;