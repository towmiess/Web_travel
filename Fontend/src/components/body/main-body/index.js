import { BiSearchAlt } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import imgwone from "../../../images/icon_whychoose_1.webp";
import imgwtwo from "../../../images/icon_whychoose_2.webp";
import imgwthree from "../../../images/icon_whychoose_3.webp";
import iconstepone from "../../../images/icon_step_1.webp";
import iconsteptwo from "../../../images/icon_step_2.webp";
import iconstepthree from "../../../images/icon_step_3.webp";
import imageabout from "../../../images/img-section-about.jpg";
import "./body.scss";
import { useEffect, useState } from "react";
import { getbySearch } from "../../../services/tourServices";
import { NavLink } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

function Body() {
  const [tourbysearch, setTourBySearch] = useState([]);
  const [keyword, setKeyWord] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getbySearch(keyword);
      setTourBySearch(response);
    }
    fetchApi();
  }, [keyword])

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyWord(e.target[0].value);
  }

  return (
    <>
      <div className="container container-search">
        <div className="search">
          <form onSubmit={handleSubmit}>
            <span className="search-icon">
              <BiSearchAlt />
            </span>
            <input type="text" placeholder="Nhập danh mục cần tìm (Ví dụ: trong nước, ngoài nước, mùa hè...)" />
            <button className="button-submit" type="submit">Tìm kiếm</button>
          </form>
        </div>
        {tourbysearch.length > 0 && (
          <div style={{color: "#212633", fontWeight: 700, fontSize: 32, marginTop: 20}}>Danh sách các Tour được tìm thấy</div>
        )}
        <div style={{display: "flex", marginTop: 30, flexWrap: "wrap"}}>
          {tourbysearch?.map((item, index) => (
            <div className="col-3" key={`${item.slug}-${index}`}>
              <div className="alltour-bottom__card" style={{height: 350}}>
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
                {/* <form onSubmit={handleSubmit}>
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
                    </form> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="session-one">
        <div className="session-one__body">
          <h2 className="session-one__title">
            Vì sao bạn nên chọn Sky Tour
          </h2>
          <div className="session-one__content">
            <div className="session-one__content--cart">
              <img src={imgwone} alt="" />
              <div className="session-one__content--cart-body">
                <div className="session-one__content--cart-title">Giá tốt nhất cho bạn</div>
                <div className="session-one__content--cart-content">
                  Có nhiều mức giá đa dạng phù hợp
                  với ngân sách và nhu cầu của bạn
                </div>
              </div>
            </div>
            <div className="session-one__content--cart">
              <img src={imgwtwo} alt="" />
              <div className="session-one__content--cart-body">
                <div className="session-one__content--cart-title">Booking dễ dàng</div>
                <div className="session-one__content--cart-content">
                  Các bước booking và chăm sóc
                  khách hàng nhanh chóng và thuận tiện
                </div>
              </div>
            </div>
            <div className="session-one__content--cart">
              <img src={imgwthree} alt="" />
              <div className="session-one__content--cart-body">
                <div className="session-one__content--cart-title">Tour du lịch tối ưu</div>
                <div className="session-one__content--cart-content">
                  Đa dạng các loại hình tour du lịch
                  với nhiều mức giá khác nhau
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="session-two">
        <div className="session-two__title">
          <div className="session-two__title-head">
            Booking cùng Sky Tour
          </div>
          <div className="session-two__title-desc">
            Chỉ với 3 bước đơn giản và dễ dàng có ngay trải nghiệm tuyệt vời!
          </div>
        </div>
        <div className="session-two__body">
          <div className="session-two__body-cart">
            <div className="session-two__body-head">
              <span className="session-two__body-head--number">1</span>
              <img className="session-two__body-head--thumb" src={iconstepone} alt="" />
            </div>
            <div className="session-two__body-content">
              <div className="session-two__body-content-title">Tìm nơi muốn đến</div>
              <div className="session-two__body-content-desc">Bất cứ nơi đâu bạn muốn đến, chúng tôi</div>
              <div className="session-two__body-content-desc">có tất cả những gì bạn cần</div>
            </div>
          </div>
          <div className="session-two__body-cart">
            <div className="session-two__body-head">
              <span className="session-two__body-head--number">2</span>
              <img className="session-two__body-head--thumb" src={iconsteptwo} alt="" />
            </div>
            <div className="session-two__body-content">
              <div className="session-two__body-content-title">Đặt vé</div>
              <div className="session-two__body-content-desc">Sky Tour  sẽ hỗ trợ bạn đặt vé trực tiếp</div>
              <div className="session-two__body-content-desc">nhanh chóng và thuận tiện</div>
            </div>
          </div>
          <div className="session-two__body-cart">
            <div className="session-two__body-head">
              <span className="session-two__body-head--number">3</span>
              <img className="session-two__body-head--thumb" src={iconstepthree} alt="" />
            </div>
            <div className="session-two__body-content">
              <div className="session-two__body-content-title">Thanh toán</div>
              <div className="session-two__body-content-desc">Hoàn thành bước thanh toán và sẵn sàng</div>
              <div className="session-two__body-content-desc">cho chuyến đi ngay thôi</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container session-three">
        <div className="session-three__left">
          <div className="session-three__left-about">
            <div className="session-three__left-about-ques">
              Hiểu hơn về chúng tôi
            </div>
            <div className="session-three__left-about-head">
              Lên kế hoạch cho chuyến đi của bạn cùng Sky Tour
            </div>
            <div className="session-three__left-about-desc">
              Vinh hạnh của chúng tôi là mang đến cho bạn những chuyến đi đáng nhớ. Mang đến cho bạn những chuyến đi đầy cảm hứng. Khám phá những vùng đất mới. Tự do khám phá cùng chúng tôi.
            </div>
          </div>
          <div className="session-three__left-about">
            <div className="session-three__left-about-ques">
              Cơ hội tuyệt vời để gửi gắm niềm tin cùng Sky Tour. Tại sao không?
            </div>
            <div className="session-three__left-about-tick">
              <span><BsCheck className="icon-tick" /></span>
              <div className="comment">Hơn 10.000 khách hàng trên khắp cả nước đã đồng hành cùng chúng tôi</div>
            </div>
            <div className="session-three__left-about-tick">
              <span><BsCheck className="icon-tick" /></span>
              <div className="comment">Bao phủ hơn 1.000 tour trong và ngoài nước</div>
            </div>
            <div className="session-three__left-about-tick">
              <span><BsCheck className="icon-tick" /></span>
              <div className="comment">Tour và giá cả đa dạng</div>
            </div>
          </div>
        </div>
        <div className="session-three__right">
          <img src={imageabout} alt="" />
        </div>
      </div>
    </>
  )
}

export default Body;