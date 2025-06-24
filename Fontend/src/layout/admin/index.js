import { NavLink, Outlet } from "react-router-dom";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { RiBillLine } from "react-icons/ri";
import logo from "../../images/logo.png";
import "./admin.scss";
import { useEffect, useState } from "react";
import { getAllCategory } from "../../services/categoryServices";
import { createContext } from "react";
export const DataContext = createContext();

function Admin() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getAllCategory();
      setCategory(response);
    }
    fetchApi();
  }, []);

  const categoryOptions = category.map(item => ({
    id: item.id,
    title: item.title
  }));
  const navlinkActives = (e) => {
    return e.isActive ? "admin__sidebar-option active" : "admin__sidebar-option";
  }
  return (
    <>
      <div>
        <div className="admin__header">
          <div className="admin__header-menu">
            <NavLink to="#" >
              <CiFilter className="icon-header" />
            </NavLink>
            <NavLink to="#" >
              <IoMoonOutline className="icon-header" />
            </NavLink>
            <NavLink to="#" >
              <IoNotificationsOutline className="icon-header" />
            </NavLink>
            <NavLink to="/logout" >
              <FaRegUser className="icon-header" />
            </NavLink>
          </div>
        </div>
        <div className="admin__sidebar">
          <div className="admin__sidebar-logo">
            <img src={logo} alt="" />
          </div>
          <NavLink to="/admin/tourmana" className={navlinkActives}>
            <GrMapLocation className="admin__sidebar-option-icon" />
            <div className="admin__sidebar-option-title">Quản lý tour</div>
          </NavLink>
          <NavLink to="/admin/catemana" className={navlinkActives}>
            <AiOutlineBars className="admin__sidebar-option-icon" />
            <div className="admin__sidebar-option-title">Quản lý danh mục</div>
          </NavLink>
          <NavLink to="/admin/usermana" className={navlinkActives}>
            <FaUserEdit className="admin__sidebar-option-icon" />
            <div className="admin__sidebar-option-title">Quản lý người dùng</div>
          </NavLink>
          <NavLink to="/admin/ordermana" className={navlinkActives}>
            <RiBillLine className="admin__sidebar-option-icon" />
            <div className="admin__sidebar-option-title">Quản lý đơn hàng</div>
          </NavLink>
        </div>
        <main style={{ marginLeft: 250 }}>
          <DataContext.Provider value={{categoryOptions, category, setCategory}}>
            <Outlet />
          </DataContext.Provider>
        </main>
      </div>
    </>
  )
}
export default Admin;