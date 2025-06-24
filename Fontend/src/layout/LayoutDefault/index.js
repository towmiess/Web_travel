import { NavLink, Outlet } from "react-router-dom";
import { getCookie } from "../../heaper/cookie";
import { LuShoppingCart } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../../images/logo.png";
import "./LayoutDefault.scss";
import Footer from "../../components/footer";
import { useState } from "react";
import { useSelector } from "react-redux";

function LayoutDefault() {
  useSelector(state => state.loginReducer);

  const [isHovered, setIsHovered] = useState(false);
  const token = getCookie("token");
  const userID = getCookie("id");

  const navLinkActive = (e) => {
    return e.isActive ? "on--active" : "";

  }
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="container">
            <div className="inner-header">
              <div className="logo">
                <div className="layout-default__logo">
                  <img src={logo} alt="" />
                </div>
              </div>
              <div className="inner-menu-left">
                <ul>
                  <li>
                    <NavLink to="/" className={navLinkActive}>Trang Chủ</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={navLinkActive}>Giới Thiệu</NavLink>
                  </li>
                  <li>
                    <NavLink to="/alltour" className={navLinkActive}>Du Lịch</NavLink>
                  </li>
                  <li>
                    <NavLink to="/liked" className={navLinkActive}>Yêu Thích</NavLink>
                  </li>
                  <li>
                    <NavLink to="/fags" className={navLinkActive}>Faqs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={navLinkActive}>Liên Hệ</NavLink>
                  </li>
                </ul>
              </div>
              <div className="inner-menu-right">
                <ul>
                  <li>
                    <div className="user"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      style={{ position: "relative" }}>
                      <FaRegCircleUser />
                      {isHovered && (
                        <div className="user-container">
                          {token ? (
                            <div className="container-logout">
                              <NavLink className="user-logout" to="/logout">Đăng xuất</NavLink>
                            </div>
                          ) : (
                            <>
                              <div className="user-menu">
                                <NavLink className="user-option" to="/login">Đăng nhập</NavLink>
                                <NavLink className="user-option" to="/register" style={{ border: "none", padding: 0 }}>Đăng ký</NavLink>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </li>
                  {token && (
                    <li>
                      <NavLink to={"/cart/" + userID}><LuShoppingCart /></NavLink>
                    </li>
                  )}
                  <li>
                    <div className="phone">
                      <div className="icon-phone"><TfiHeadphoneAlt /></div>
                      <div className="contact" >
                        <span className="title">Hotline</span>
                        <span className="number">0365 491 109</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header >
        <main className="layout-default__main">
          <Outlet />
        </main>
        <div>
          <Footer />
        </div>
      </div >
    </>
  )
}
export default LayoutDefault;