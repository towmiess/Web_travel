import { Flex, Input, Radio } from "antd";
import { useContext, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { addcate, delcate, editcate, getAllCategory } from "../../../services/categoryServices";
import Swal from "sweetalert2";
import { DataContext } from "../../../layout/admin";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const { TextArea } = Input;

function CateMana() {
  const { category, setCategory } = useContext(DataContext);
  const [editData, setEditdata] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showinsert, setShowInsert] = useState(false);
  const [delData, setDelData] = useState(null);

  const handleClick = () => {
    setShowInsert(true);
  }
  const handleCancel = () => {
    setShowEdit(false)
    setShowInsert(false)
  }
  const handleClickEdit = (item) => {
    setEditdata(item);
    setShowEdit(true);
  }
  const handleClickDelete = (item) => {
    setDelData(item);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const option = {
      title: e.target[0].value,
      image: e.target[1].value,
      description: e.target[2].value,
      status: formData.get("status")
    }
    const response = await addcate(option);
    if (response.code === 200) {
      const updatedFavorites = await getAllCategory();
      setCategory(updatedFavorites);

      Swal.fire({
        icon: "success",
        title: "Thêm danh mục thành công",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        setShowInsert(false)
      }, 1000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Thêm danh mục thất bại",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  const handleEditCate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const option = {
      id: parseInt(e.target[5].value),
      title: e.target[0].value,
      image: e.target[1].value,
      description: e.target[2].value,
      status: formData.get("status")
    }

    const response = await editcate(option);
    if (response.code === 200) {
      const updatedFavorites = await getAllCategory();
      setCategory(updatedFavorites);

      Swal.fire({
        icon: "success",
        title: "Sửa danh mục thành công",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        setShowEdit(false)
      }, 1000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Sửa danh mục thất bại",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  const handleDelete = async (e) => {
    e.preventDefault();
    const id = parseInt(e.target[0].value);
    Swal.fire({
      title: 'Bạn có chắc muốn xóa tour này?',
      text: 'Hành động này không thể hoàn tác!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Có, xóa!',
      cancelButtonText: 'Hủy'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await delcate(id); // Gọi API xóa
        Swal.fire({
          title: 'Xóa Tour Thành Công!',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        const updatedFavorites = await getAllCategory();
        setCategory(updatedFavorites);
      }
    });
  }
  return (
    <>
      <div className="container">
        <div className="tourmanage__top">
          <div className="tourmanage__top-title">
            Trang quản lý danh mục
          </div>
          <div className="tourmanage__top-insert" onClick={handleClick} style={{ userSelect: "none" }}>
            <span>Thêm mới</span>
            <IoMdAddCircleOutline />
          </div>
        </div>
        {showinsert && (
          <div className="show-model" style={{ width: 410, height: 420, left: 600, top: 180 }} >
            <form onSubmit={handleSubmit}>
              <div className="tour-cate">
                <div className="tour">
                  <label htmlFor="1">Tên danh mục</label>
                  <Input className="input-tour-title" id="1" placeholder="Nhập tên tour" />
                </div>
              </div>
              <div className="img-price" style={{ flexDirection: "column" }}>
                <div className="up-image" style={{ marginLeft: 0 }}>
                  <label htmlFor="img">Upload ảnh</label>
                  <Input id="img" className="input-img" placeholder="Thêm link ảnh" />
                </div>
                <div className="price">
                  <label htmlFor="price">Ghi chú</label>
                  <TextArea rows={4} placeholder="Nhập ghi chú" />
                </div>
              </div>
              <div className="status">
                <label>Trạng thái</label>
                <Radio.Group
                  name="status"
                  options={[
                    {
                      value: "active",
                      className: 'option-1',
                      label: (
                        <Flex gap="small" justify="center" align="center" vertical>
                          Hoạt động
                        </Flex>
                      ),
                    },
                    {
                      value: "inactive",
                      className: 'option-2',
                      label: (
                        <Flex gap="small" justify="center" align="center" vertical>
                          Dừng hoạt động
                        </Flex>
                      ),
                    }
                  ]}
                />
              </div>
              <button className="btn-insert-tour" type="submit" style={{ marginLeft: 90 }}>Thêm mới</button>
            </form>
            <button onClick={handleCancel} className="btn-back" style={{ position: "relative", left: 360, bottom: 380, width: 20, height: 20, display: "flex", justifyContent: "center", alignItems: "center", border: "none", background: "red", color: "#fff", borderRadius: 5 }}>x</button>
          </div>
        )}
        {showinsert && (
          <div className="black-bg"></div>
        )}
        {category && (
          <div className="tourmanage__bottom">
            <table className="table text-center align-middle" >
              <thead>
                <tr >
                  <th style={{ padding: 0 }}>STT</th>
                  <th style={{ padding: 0 }}>Hình ảnh</th>
                  <th style={{ padding: 0 }}>Tiêu đề</th>
                  <th style={{ padding: 0 }}>Trạng thái</th>
                  <th style={{ padding: 0 }}>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {category.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: 0, fontSize: 16 }}>{index + 1}</td>
                    <td style={{ width: 110 }}><img style={{ width: 100, height: "auto", aspectRatio: 16 / 9, objectFit: "cover", borderRadius: 5, margin: "10px 0 10px 0" }} src={item.image} alt="" /></td>
                    <td style={{ padding: 0, fontSize: 16 }}>{item.title}</td>
                    <td style={{ padding: 0 }}>{item.status === "active" ? (<span className="active">Hoạt động</span>) : (<><span className="inactive">Dừng hoạt động</span></>)}</td>
                    <td style={{ padding: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "93.05px" }}>
                      <span className="edit" onClick={() => handleClickEdit(item)}><AiOutlineEdit /></span>
                      {showEdit && (
                        <div className="show-model" style={{ width: 410, height: 420, left: 600, top: 180, textAlign: "left", border: "none" }} >
                          <form onSubmit={handleEditCate}>
                            <div className="tour-cate">
                              <div className="tour">
                                <label htmlFor="1">Tên danh mục</label>
                                <Input defaultValue={editData?.title} className="input-tour-title" id="1" placeholder="Nhập tên tour" />
                              </div>
                            </div>
                            <div className="img-price" style={{ flexDirection: "column" }}>
                              <div className="up-image" style={{ marginLeft: 0 }}>
                                <label htmlFor="img">Upload ảnh</label>
                                <Input defaultValue={editData?.image} id="img" className="input-img" placeholder="Thêm link ảnh" />
                              </div>
                              <div className="price">
                                <label htmlFor="price">Ghi chú</label>
                                <TextArea defaultValue={editData?.description} rows={4} placeholder="Nhập ghi chú" />
                              </div>
                            </div>
                            <div className="status">
                              <label>Trạng thái</label>
                              <Radio.Group
                                defaultValue={editData?.status}
                                name="status"
                                options={[
                                  {
                                    value: "active",
                                    className: 'option-1',
                                    label: (
                                      <Flex gap="small" justify="center" align="center" vertical>
                                        Hoạt động
                                      </Flex>
                                    ),
                                  },
                                  {
                                    value: "inactive",
                                    className: 'option-2',
                                    label: (
                                      <Flex gap="small" justify="center" align="center" vertical>
                                        Dừng hoạt động
                                      </Flex>
                                    ),
                                  }
                                ]}
                              />
                            </div>
                            <Input defaultValue={editData?.id} style={{ display: "none" }} />
                            <button className="btn-insert-tour" type="submit" style={{ marginLeft: 90 }}>Thay đổi</button>
                          </form>
                          <button onClick={handleCancel} className="btn-back" style={{ position: "relative", left: 360, bottom: 380, width: 20, height: 20, display: "flex", justifyContent: "center", alignItems: "center", border: "none", background: "red", color: "#fff", borderRadius: 5 }}>x</button>
                        </div>
                      )}
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
        {showEdit && (
          <div className="black-bg"></div>
        )}
      </div>
    </>
  )
}

export default CateMana;