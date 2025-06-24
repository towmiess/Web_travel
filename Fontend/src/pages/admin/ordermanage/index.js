import { useEffect, useState } from "react";
import { delorder, getAllOrder } from "../../../services/orderServices";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";

function Ordermanage() {
  const [allorder, setAllOrder] = useState([]);
  const [delData, setDelData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getAllOrder();
      setAllOrder(response);
    }
    fetchApi();
  }, []);

  const handleClickDelete = (item) => {
    setDelData(item);
  }
  const handleDelete = async (e) => {
    e.preventDefault();
    const id = parseInt(e.target[0].value);
    Swal.fire({
      title: 'Bạn có chắc muốn xóa hóa đơn?',
      text: 'Hành động này không thể hoàn tác!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Có, xóa!',
      cancelButtonText: 'Hủy'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await delorder(id); // Gọi API xóa
        Swal.fire({
          title: 'Xóa Người Dùng Thành Công!',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        const updatedFavorites = await getAllOrder();
        setAllOrder(updatedFavorites);
      }
    });
  }
  return (
    <>
      <div className="container">
        <div className="tourmanage__top">
          <div className="tourmanage__top-title">
            Trang quản lý đơn hàng
          </div>
        </div>
        {allorder && (
          <div className="tourmanage__bottom">
            <table className="table text-center align-middle" >
              <thead>
                <tr >
                  <th style={{ padding: 0 }}>STT</th>
                  <th style={{ padding: 0 }}>Mã Tour</th>
                  <th style={{ padding: 0 }}>Tiêu đề</th>
                  <th style={{ padding: 0 }}>Họ tên</th>
                  <th style={{ padding: 0 }}>Số điện thoại</th>
                  <th style={{ padding: 0 }}>Email</th>
                  <th style={{ padding: 0 }}>Trạng thái</th>
                  <th style={{ padding: 0 }}>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {allorder.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: 0, fontSize: 16 }}>{index + 1}</td>
                    <td style={{ padding: 0, fontSize: 16 }}>{item.code}</td>
                    <td style={{ padding: 0, fontSize: 16 }}>{item.title}</td>
                    <td style={{ padding: 0, fontSize: 16 }}>{item.fullName}</td>
                    <td style={{ padding: 0, fontSize: 16 }}>{item.phone}</td>
                    <td style={{ padding: 0, fontSize: 16 }}>{item.email}</td>
                    <td style={{ padding: 0 }}>{item.status === "active" ? (<span className="active">Đã thanh toán</span>) : (<><span className="inactive">Chưa thanh toán</span></>)}</td>
                    <td style={{ padding: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "93.05px" }}>
                      <form onSubmit={handleDelete} onClick={() => handleClickDelete(item)}>
                        <input defaultValue={delData?.id} type="number" style={{ display: "none" }} />
                        <button type="submit" className="delete"><RiDeleteBin6Line /></button>
                      </form>
                    </td>
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
export default Ordermanage;