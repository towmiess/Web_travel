import { useEffect, useState } from "react";
import { deluser, edituser, getUser } from "../../../services/userServices";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";

function Usermana() {
  const [user, setUser] = useState([]);
  const [editData, setEditdata] = useState(null);
  const [delData, setDelData] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getUser();
      setUser(response);
    }
    fetchApi();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    const id = parseInt(e.target[0].value);
    Swal.fire({
      title: 'Bạn có muốn chỉnh sửa phân quyền người này không?',
      text: 'Hành động này không thể hoàn tác!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Có, chuyển!',
      cancelButtonText: 'Hủy'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await edituser(id); // Gọi API sửa
        Swal.fire({
          title: 'Phân quyền Thành Công!',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        const updatedFavorites = await getUser();
        setUser(updatedFavorites);
      }
    });
  }
  const handleClickEdit = (item) => {
    setEditdata(item);
  }
  const handleDelete = async (e) => {
    e.preventDefault();
    const id = parseInt(e.target[0].value);
    Swal.fire({
      title: 'Bạn có chắc muốn xóa người này?',
      text: 'Hành động này không thể hoàn tác!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Có, xóa!',
      cancelButtonText: 'Hủy'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deluser(id); // Gọi API xóa
        Swal.fire({
          title: 'Xóa Người Dùng Thành Công!',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        const updatedFavorites = await getUser();
        setUser(updatedFavorites);
      }
    });
  }

  const handleClickDelete = (item) => {
    setDelData(item);
  }
  return (
    <>
      <div className="container">
        <div className="tourmanage__top">
          <div className="tourmanage__top-title">
            Trang quản lý người dùng
          </div>
        </div>
        {user && (
          <div className="tourmanage__bottom">
            <table className="table text-center align-middle" >
              <thead>
                <tr >
                  <th style={{ padding: 10 }}>STT</th>
                  <th style={{ padding: 10 }}>UserName</th>
                  <th style={{ padding: 10 }}>Token</th>
                  <th style={{ padding: 10 }}>Admin</th>
                  <th style={{ padding: 10 }}>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {user.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: 10, fontSize: 16 }}>{index + 1}</td>
                    <td style={{ padding: 10 }}><span>{item.userName}</span></td>
                    <td style={{ padding: 10, fontSize: 16 }}>{item.token}</td>
                    <td style={{ padding: 10 }}>{item.isadmin ? (<>Quản trị viên</>) : (<>Người dùng</>)}</td>
                    {item.isadmin ? (<>
                      <td style={{ padding: 10, display: "flex", justifyContent: "center", alignItems: "center", height: 47.8 }}></td>
                    </>) : <>
                      <td style={{ padding: 10, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <form onSubmit={handleEdit} onClick={() => handleClickEdit(item)}>
                          <input defaultValue={editData?.id} type="number" style={{ display: "none" }} />
                          <button type="submit" className="edit" style={{ border: "none" }}><AiOutlineEdit /></button>
                        </form>
                        <form onSubmit={handleDelete} onClick={() => handleClickDelete(item)}>
                          <input defaultValue={delData?.id} type="number" style={{ display: "none" }} />
                          <button type="submit" className="delete"><RiDeleteBin6Line /></button>
                        </form>
                      </td>
                    </>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
export default Usermana;