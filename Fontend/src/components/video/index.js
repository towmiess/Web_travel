import { NavLink } from "react-router-dom";
import video from "../../images/video_web.mp4";  
import './video.scss'; 

function Video() {  
  return (  
    <div className="video">  
      <video width="100%" autoPlay loop muted className="video-element">  
        <source src={video} type="video/mp4" />  
      </video>  
      <div className="overlay">  
        <h1 className="overlay-text">SKY TOUR</h1> 
        <div className="desc-text">Cùng Sky Tour khám phá và tận hưởng trải nghiệm những chuyến du lịch</div>
        <div className="from-text">hấp dẫn và hàng ngàn ưu đãi</div>
        <NavLink  to="/register"><button className="button-register">Đăng kí ngay</button></NavLink>
      </div>  
    </div>  
  );  
}  

export default Video;