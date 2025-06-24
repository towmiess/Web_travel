import experone from "../../../images/img_experience_1.webp";
import expertwo from "../../../images/img_experience_2.webp";
import experthree from "../../../images/img_experience_3.webp";
import experfour from "../../../images/img_experience_4.webp";
import experfive from "../../../images/img_experience_5.webp";
import expersix from "../../../images/img_experience_6.webp";
import experseven from "../../../images/img_experience_7.webp";
import expereight from "../../../images/img_experience_8.webp";
import "./activity.scss";
function Activity() {
  return (
    <>
      <div className="container session-four">
        <div className="session-four__content">
          <div className="session-four__content-ques">Khám phá thế giới</div>
          <div className="session-four__content-title">Các trải nghiệm & hoạt động</div>
          <div className="session-four__content-desc">
            Sky Tour cung cấp cho bạn rất nhiều loại hình du lịch với
            đa dạng các trải nghiệm khác nhau. Đừng ngại ngần, hãy
            chuẩn bị và sẵn sàng ngay!
          </div>
          <div className="session-four__content-desc">Hãy cùng tận hưởng những hoạt động và trải nghiệm có ích bên gia đình nào!</div>
        </div>
        <div className="session-four__activity">
          <div className="session-four__activity-form">
            <div className="session-four__activity-image">
              <img src={experone} alt="" />
              <div className="session-four__activity-image-desc">Nghỉ Dưỡng</div>
            </div>
            <div className="session-four__activity-image">
              <img src={expertwo} alt="" />
              <div className="session-four__activity-image-desc">Cáp Treo</div>
            </div>
            <div className="session-four__activity-image">
              <img src={experthree} alt="" />
              <div className="session-four__activity-image-desc">Du Thuyền</div>
            </div>
            <div className="session-four__activity-image">
              <img src={experfour} alt="" />
              <div className="session-four__activity-image-desc">Mạo Hiểm</div>
            </div>
          </div>
          <div className="session-four__activity-form">
            <div className="session-four__activity-image">
              <img src={experfive} alt="" />
              <div className="session-four__activity-image-desc">Khám Phá</div>
            </div>
            <div className="session-four__activity-image">
              <img src={expersix} alt="" />
              <div className="session-four__activity-image-desc">Dưới Nước</div>
            </div>
            <div className="session-four__activity-image">
              <img src={experseven} alt="" />
              <div className="session-four__activity-image-desc">Ẩm Thực</div>
            </div>
            <div className="session-four__activity-image">
              <img src={expereight} alt="" />
              <div className="session-four__activity-image-desc">Cắm Trại</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Activity;