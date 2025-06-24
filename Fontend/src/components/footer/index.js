import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import appstore from "../../images/img-app-store.webp";
import googleplay from "../../images/img-google-play.webp";
import payone from "../../images/icon_payment_1.webp";
import paytwo from "../../images/icon_payment_2.webp";
import paythree from "../../images/icon_payment_3.webp";
import payfour from "../../images/icon_payment_4.webp";
import payfive from "../../images/icon_payment_5.webp";
import "./footer.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container footer-contai">
          <div className="row">
            <div className="col-3" style={{ paddingLeft: 70}}>
              <div className="title">Thông tin liên hệ</div>
              <div className="content">
                <div className="content-title">Địa chỉ</div>
                <div className="content-desc">Km10 Trần Phú, Hà Đông, Hà Nội</div>
              </div>
              <div className="content">
                <div className="content-title">Email</div>
                <div className="content-desc">support@gmail.com</div>
              </div>
              <div className="content">
                <div className="content-title">Hotline</div>
                <div className="content-desc">0365 491 109</div>
              </div>
              <div className="content" style={{ marginBottom: 0 }}>
                <div className="content-title">Thời gian hỗ trợ</div>
                <div className="content-desc">08:30 - 21:30 các ngày trong tuần</div>
              </div>
            </div>
            <div className="col-3" style={{ paddingLeft: 50}}>
              <div className="title" style={{ marginBottom: 10 }}>Hướng dẫn</div>
              <div className="content">
                <NavLink to="/" className="content-desc">Trang chủ du lịch</NavLink>
              </div>
              <div className="content">
                <NavLink to="/about" className="content-desc">Giới thiệu về Sky Tour</NavLink>
              </div>
              <div className="content">
                <NavLink to="/liked" className="content-desc">Điểm đến yêu thích</NavLink>
              </div>
              <div className="content">
                <NavLink to="/alltour" className="content-desc">Các Tour du lịch</NavLink>
              </div>
              <div className="content">
                <NavLink to="/fags" className="content-desc">Giải đáp thắc mắc</NavLink>
              </div>
              <div className="content" style={{ marginBottom: 0 }}>
                <NavLink to="/contact" className="content-desc">Thông tin liên hệ</NavLink>
              </div>
            </div>
            <div className="col-3">
              <div className="title">Thông tin cần biết</div>
              <div className="content">
                <div className="content-desc" style={{fontSize: 14}}>Về chúng tôi</div>
              </div>
              <div className="content">
                <div className="content-desc" style={{fontSize: 14}}>Câu hỏi thường gặp</div>
              </div>
              <div className="content">
                <div className="content-desc" style={{fontSize: 14}}>Điều kiện, điều khoản</div>
              </div>
              <div className="content">
                <div className="content-desc" style={{fontSize: 14}}>Quy chế hoạt động</div>
              </div>
              <div className="content">
                <div className="content-desc" style={{fontSize: 14}}>Thông tin bảo mật</div>
              </div>
              <div className="content" style={{ marginBottom: 0 }}>
                <div className="content-desc" style={{fontSize: 14}}>Thông tin chính sách</div>
              </div>
            </div>
            <div className="col-3">
              <div className="title">Kết nối</div>
              <div className="item">
                <FaFacebook className="icon"/>
                <FaYoutube className="icon"/>
                <FaTwitter className="icon"/>
                <FaInstagram className="icon"/>
                <FaGithub className="icon"/>
              </div>
              <div className="title">Tải ứng dụng Sky Tour</div>
              <div className="download">
                <img src={appstore} alt="" />
                <img src={googleplay} alt="" />
              </div>
              <div className="title">Phương thức thanh toán</div>
              <div className="pay">
                <img src={payone} alt="" />
                <img src={paytwo} alt="" />
                <img src={paythree} alt="" />
                <img src={payfour} alt="" />
                <img src={payfive} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="infor">
          CopyWrite by TuLee With Team5
        </div>
      </div>
    </>
  )
}
export default Footer;