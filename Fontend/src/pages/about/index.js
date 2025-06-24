import imgborder from "../../images/heading-border.webp";
import { IoDiamondSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { LuLockKeyhole } from "react-icons/lu";

import "./about.scss";
function About() {
  return (
    <>
      <div className="container about-contain">
        <div className="content-top-title">Về Sky Tour</div>
        <img className="images" src={imgborder} alt="" />
        <div className="content-bottom-title">1. Chúng tôi là Sky Tour</div>
        <div className="content-bottom-dessc">Sky Tour là sản phẩm chính thức của Công ty TNHH Du lịch và dịch vụ N5-Vivu. Với niềm đam mê du lịch, ưa khám phá, chúng tôi đã cùng nhau xây dựng một website – nơi mà khách hàng sẽ dễ dàng lựa chọn cho mình cũng như những người thân yêu chuyến nghỉ dưỡng đáng nhớ. Sky Tour chọn lọc các địa điểm du lịch, khách sạn và liên kết với các nhà cung cấp không nhằm cung cấp những dịch vụ đa dạng và tốt nhất cho khách hàng.</div>
        <div className="content-bottom-title">2. Tại sao chọn chúng tôi?</div>
        <div className="content-bottom-dessc">Chúng tôi mong muốn khách hàng tận hưởng các dịch vụ du lịch chất lương bằng sự trải nghiệm thực tế của chính đội ngũ của Sky Tour. Các hình ảnh về địa điểm, khách sạn hay những dịch vụ mà chúng tôi đã ghi lại cũng sẽ được chúng tôi giới thiệu tới khách hàng. Chính từ những hình ảnh này, quý khách có thể chọn lựa cho mình hay gia đình, bạn bè, đồng nghiệp những chuyến đi ý nghĩa nhất. Chúng tôi chắc chắn sẽ mang lại cho du khách những kỳ nghĩ đáng nhớ với:</div>
        <div className="row">
          <div className="col-6">
            <div className="about-card">
              <div className="about-card-item">
                <IoDiamondSharp className="about-card-item-icon" />
                <span className="about-card-item-title">Đội ngũ chuyên nghiệp, tâm huyết</span>
              </div>
              <div className="about-card-desc">Chúng tôi có đội ngũ nhân viên kinh nghiệm, tâm huyết, luôn lắng nghe những thắc mắc, ý kiến của khách hàng thông qua hotline, fanpage được kết nối liên tục. Với vốn kiến thức quý giá tích lũy qua nhiều năm, chúng tôi sẽ tư vấn cho quý khách những sản phẩm du lịch phù hợp nhất cũng như những vấn đề phát sinh trong chuyến nghỉ dưỡng. Ngoài ra, chúng tôi còn có những nhân viên mới trẻ trung, năng động hứa hẹn sẽ giới thiệu nhiều điểm đến mới hấp dẫn cho du khách.</div>
            </div>
          </div>
          <div className="col-6">
            <div className="about-card">
              <div className="about-card-item">
                <FaRegStar className="about-card-item-icon" />
                <span className="about-card-item-title">Sản phẩm phong phú</span>
              </div>
              <div className="about-card-desc">Tại địa chỉ website: skytour.com của chúng tôi, khách hàng có thể dễ dàng tìm thấy một địa điểm du lịch sang trọng, một khu nghỉ dưỡng tuyệt đẹp trên mảnh đất hình chữ S. Chúng tôi cũng đưa ra những thông tin đầy đủ, hình ảnh thực tế của các dịch vụ chất lượng. Qua đó, quý khách sẽ chon lựa được một dịch vụ phù hợp cho chuyến đi cùng gia đình, bạn bè hay đồng nghiệp.</div>
            </div>
          </div>
          <div className="col-6">
            <div className="about-card">
              <div className="about-card-item">
                <RiMoneyDollarCircleFill className="about-card-item-icon" />
                <span className="about-card-item-title">Mức giá hấp dẫn</span>
              </div>
              <div className="about-card-desc">Sky Tour luôn cam kết sẽ đem đến các dịch vụ chất lượng với các mức giá tốt nhất. Chúng tôi tin chắc rằng chi phí mà quý khách thanh toán là hoàn toàn xứng đáng. Bên cạnh đó, quý khách cũng có thể tìm thấy nhiều món quà hấp dẫn trong những đợt khuyến mại trên website của chúng tôi.</div>
            </div>
          </div>
          <div className="col-6">
            <div className="about-card">
              <div className="about-card-item">
                <LuLockKeyhole className="about-card-item-icon" />
                <span className="about-card-item-title">Bảo mật thông tin</span>
              </div>
              <div className="about-card-desc">Chúng tôi cam kết toàn bộ mọi thông tin cá nhân của khách hàng sẽ được giữ bí mật tuyệt đối. Quý khách có thể yên tâm trải nghiệm dịch vụ thực sự thoải mái và riêng tư. Hi vọng, skytour.com sẽ là một địa chỉ tin cậy trong mỗi chuyến đi , mỗi kỳ nghỉ của quý khách.</div>
            </div>
          </div>
        </div>
        <div className="content-bottom-title">3. Sản phẩm dịch vụ</div>
        <div className="content-bottom-dessc" style={{ marginBottom: 10 }}>Sky Tour cung cấp nhiều dịch vụ du lịch phong phú và đa dạng giúp du khách có nhiều lựa chọn:</div>
        <ul>
          <li>- Các địa điểm du lịch đa dạng và phong phú ở trong nước</li>
          <li>- Với các địa điểm du lịch đa dạng, dịch vụ phong phú</li>
          <li>-  Đặt phòng khách sạn và resort</li>
        </ul>
        <div className="content-bottom-dessc" style={{ marginTop: -10 }}>Ngoài ra, chúng tôi cũng cung cấp nhiều dịch vụ khác như: thuê xe du lịch chất lượng cao, thuê hướng dẫn viên du lịch, visa, vé tàu…giúp du khách thoải mái và dễ dàng cho những chuyến du lịch.</div>
        <div className="content-bottom-title">4. Liên hệ với chúng tôi</div>
        <div className="about-contact-card">
          <div className="about-contact-card-item">
            <div className="about-contact-card-item-title">CÔNG TY TNHH DU LỊCH VÀ DỊCH VỤ N5-VIVU</div>
            <div className="about-contact-card-item-desc">N5-VIVU TRAVEL AND SERVICE COMPANY LIMITED</div>
          </div>
          <div className="about-contact-card-item">
            <div className="about-contact-card-item-desc">Mã số thuế: 1000123456</div>
            <div className="about-contact-card-item-desc">Giấy phép kinh doanh số: 1000123456</div>
            <div className="about-contact-card-item-desc">Nơi cấp: Sở KH & ĐT TP Hà Nội.</div>
          </div>
          <div className="about-contact-card-item" style={{marginBottom: 0}}>
            <div className="about-contact-card-item-desc">Hà Nội: Km10-Trần Phú-Hà Đông-Hà Nội</div>
            <div className="about-contact-card-item-desc">Điện thoại: 0123456789</div>
            <div className="about-contact-card-item-desc">Địa chỉ email: infor@skytour.com.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;