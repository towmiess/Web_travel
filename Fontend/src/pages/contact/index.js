import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./contact.scss";

function Contact() {
  return (
    <>
      <div className="container">
        <div className="contact-top">
          <div className="contact-top-title">Thông tin liên hệ</div>
          <div className="contact-top-desc">Chúng tôi vinh hạnh vì đã có cơ hội đồng hành với hơn 10.000 khách hàng trên khắp thế giới</div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="contact-middle">
              <FaLocationDot className="contact-middle-icon" />
              <div className="contact-middle-title">Địa chỉ</div>
              <div className="contact-middle-desc">Hà Nội: Km10-Trần Phú-Hà Đông-Hà Nội</div>
            </div>
          </div>
          <div className="col-4">
            <div className="contact-middle">
              <MdEmail className="contact-middle-icon" />
              <div className="contact-middle-title">Email</div>
              <div className="contact-middle-desc">infor@skytour.com</div>
            </div>
          </div>
          <div className="col-4">
            <div className="contact-middle">
              <FaPhoneAlt className="contact-middle-icon" />
              <div className="contact-middle-title">Hotline</div>
              <div className="contact-middle-desc">0365 491 109</div>
            </div>
          </div>
        </div>
        <div className="sendinfor-map">
          <div className="row">
            <div className="col-6">
              <div style={{ width: '100%', height: '360px', borderRadius: 20, overflow: 'hidden', marginBottom: 60 }}>
                <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3725.254750484276!2d105.78493580396403!3d20.982422980655336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1svi!2s!4v1748610618533!5m2!1svi!2s"
                ></iframe>
              </div>
            </div>
            <div className="col-6">
              <form className="form-send-infor">
                <input type="text" placeholder="Họ và tên" style={{ width: "100%", marginBottom: 20, height: 40, padding: "10px 20px", outline: "none", borderRadius: 12, border: "1px solid #f1f1f1", fontSize: 13 }} />
                <input type="text" placeholder="Email" style={{ width: "100%", marginBottom: 20, height: 40, padding: "10px 20px", outline: "none", borderRadius: 12, border: "1px solid #f1f1f1", fontSize: 13 }} />
                <input type="text" placeholder="Điện thoại" style={{ width: "100%", marginBottom: 20, height: 40, padding: "10px 20px", outline: "none", borderRadius: 12, border: "1px solid #f1f1f1", fontSize: 13 }} />
                <textarea type="text" rows="5" placeholder="Nội dung" style={{ width: "100%", marginBottom: 20, padding: "10px 20px", outline: "none", borderRadius: 12, border: "1px solid #f1f1f1", fontSize: 13 }} />
                <button className="btn-send-infor">Gửi thông tin</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;