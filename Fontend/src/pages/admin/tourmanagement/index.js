import { useContext, useEffect, useRef, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Input, Select, Space, TimePicker } from 'antd';
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import dayjs from "dayjs";
import { Flex, Radio } from 'antd';
import "./tourmana.scss";
import { DataContext } from "../../../layout/admin";
import { addtour, deltour, edittour, getAll, getCateID } from "../../../services/tourServices";
import Swal from "sweetalert2";

function TourManage() {
  const modelref = useRef();
  const editref = useRef();

  const [delData, setDelData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [alltour, setAlltour] = useState([]);
  const [selectedCate, setSelectedCate] = useState(null);
  const [showinsert, setShowinsert] = useState(false);
  const [tourcate, setTourCate] = useState([]);
  const [selectEdit, setSelectEdit] = useState(null);

  const {categoryOptions} = useContext(DataContext);

  const format = 'HH:mm';

  const handleClick = () => {
    setShowinsert(!showinsert);
    setSelectedCate(null);
  }

  const handleChangeSelect = (value) => {
    setSelectEdit(value);
  }
  const handleEditCancel = () => {
    setShowEdit(false);
  }
  const handleClickDelete = (item) => {
    setDelData(item);
  }
  const handleClickEdit = (item) => {
    setShowEdit(true);
    setEditData(item);
    setSelectEdit(item.cate_id);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const options = {
      title: e.target[0].value,
      category_id: parseInt(selectedCate),
      images: e.target[3].value,
      price: parseInt(e.target[2].value),
      discount: parseInt(e.target[7].value),
      information: e.target[4].value,
      schedule: e.target[6].value,
      timeStart: e.target[8].value,
      stock: parseInt(e.target[9].value),
      startPlace: e.target[5].value,
      status: formData.get("status")
    };
    const response = await addtour(options);

    if (response.code === 200) {
      const updatedFavorites = await getAll();
      setAlltour(updatedFavorites);

      Swal.fire({
        icon: "success",
        title: "Thêm Tour mới thành công",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        setShowinsert(false)
      }, 1000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Thêm Tour thất bại",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const options = {
      title: e.target[0].value,
      category_id: parseInt(selectEdit),
      images: e.target[3].value,
      price: parseInt(e.target[2].value),
      discount: parseInt(e.target[7].value),
      information: e.target[4].value,
      schedule: e.target[6].value,
      timeStart: e.target[8].value,
      stock: parseInt(e.target[9].value),
      startPlace: e.target[5].value,
      status: formData.get("status"),
      id: parseInt(e.target[12].value)
    };

    const response = await edittour(options);
    if (response.code === 200) {
      const updatedFavorites = await getAll();
      setAlltour(updatedFavorites);

      Swal.fire({
        icon: "success",
        title: "Sửa Tour thành công",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        setShowEdit(false)
      }, 1000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Sửa Tour thất bại",
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
        await deltour(id); // Gọi API xóa
        Swal.fire({
          title: 'Xóa Tour Thành Công!',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        const updatedFavorites = await getAll();
        setAlltour(updatedFavorites);
      }
    });
  }
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getAll();
      setAlltour(response);
    }
    fetchApi();
  }, [])

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getCateID();
      setTourCate(response);
    }
    fetchApi();
  }, [])
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideInsert = modelref.current && !modelref.current.contains(event.target);
      const clickedOutsideEdit = editref.current && !editref.current.contains(event.target);

      if (showinsert && clickedOutsideInsert) {
        setShowinsert(false);
      }

      if (showEdit && clickedOutsideEdit) {
        setShowEdit(false);
      }
    };

    if (showinsert || showEdit) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showinsert, showEdit]);

  //gán từng danh mục vào từng tour
  // Tạo map từ category_id đến title
  const cateMap = {};
  categoryOptions.forEach(cate => {
    cateMap[cate.id] = cate.title;
  });

  // Tạo map từ tour_id đến category_id
  const tourCateMap = {};
  tourcate.forEach(item => {
    tourCateMap[item.tour_id] = item.category_id;
  });

  // Gộp lại
  const alltourWithCategory = alltour.map(tour => {
    const categoryId = tourCateMap[tour.id]; // Dùng tour.id thay vì tour.tour_id
    const categoryTitle = cateMap[categoryId];
    return {
      ...tour,
      categoryTitle: categoryTitle || "Không có danh mục",
      cate_id: categoryId || null
    };
  });

  return (
    <>
      <div className="container">
        <div className="tourmanage__top">
          <div className="tourmanage__top-title">
            Trang quản lý tour
          </div>
          <div className="tourmanage__top-insert" onClick={handleClick} style={{ userSelect: "none" }}>
            <span>Thêm Tour</span>
            <IoMdAddCircleOutline />
          </div>
        </div>
        {showinsert && (
          <div className="show-model" >
            <form onSubmit={handleSubmit}>
              <div className="tour-cate">
                <div className="tour">
                  <label htmlFor="1">Tên tour mới</label>
                  <Input className="input-tour-title" id="1" placeholder="Nhập tên tour" />
                </div>
                <div className="cate">
                  <label>Chọn danh mục</label>
                  <Space wrap>
                    <Select
                      className="select-cate"
                      placeholder="--chọn danh mục--"
                      value={selectedCate}
                      onChange={(value) => setSelectedCate(value)}
                      options={categoryOptions?.map((item) => ({
                        value: item.id,
                        label: item.title
                      }))}
                    />
                  </Space>
                </div>
              </div>
              <div className="img-price">
                <div className="price">
                  <label htmlFor="price">Nhập giá tiền</label>
                  <Input className="input-price" id="price" type="number" placeholder="Nhập giá" min={0} />
                </div>
                <div className="up-image">
                  <label htmlFor="img">Upload ảnh</label>
                  <Input id="img" className="input-img" placeholder="Thêm link ảnh" />
                </div>
              </div>
              <div className="activity">
                <label htmlFor="activity">Lịch trình</label>
                <Input id="activity" className="input-activity" placeholder="Các hoạt động chính" />
              </div>
              <div className="time-place">
                <div className="place">
                  <label htmlFor="place">Địa điểm</label>
                  <Input id="place" className="input-place" type="text" placeholder="Nhập địa điểm" />
                </div>
                <div className="time">
                  <label htmlFor="time">Thời gian</label>
                  <Input id="time" className="input-time" placeholder="Thời gian" />
                </div>
              </div>
              <div className="dis-time-quan">
                <div className="discount">
                  <label htmlFor="discount">Giảm giá</label>
                  <Input id="discount" className="input-discount" type="number" placeholder="Nhập % giảm giá" min={0} max={100} />
                </div>
                <div className="time-start">
                  <label >Thời gian khởi hành</label>
                  <TimePicker style={{ width: 240 }} format={format} />
                </div>
                <div className="quantity">
                  <label htmlFor="quantity">Số lượng vé</label>
                  <Input id="quantity" className="quantity-input" type="number" placeholder="Nhập số lượng" min={0} />
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
              <button className="btn-insert-tour" type="submit">Thêm Tour</button>
            </form>
            <button onClick={handleClick} className="btn-back" style={{ position: "relative", left: 750, bottom: 445, width: 20, height: 20, display: "flex", justifyContent: "center", alignItems: "center", border: "none", background: "red", color: "#fff", borderRadius: 5 }}>x</button>
          </div>
        )}
        {showinsert && (
          <div className="black-bg"></div>
        )}
        {alltourWithCategory && (
          <div className="tourmanage__bottom">
            <table className="table text-center align-middle" >
              <thead>
                <tr >
                  <th style={{ padding: 0 }}>STT</th>
                  <th style={{ padding: 0 }}>Hình ảnh</th>
                  <th style={{ padding: 0 }}>Tiêu đề</th>
                  <th style={{ padding: 0 }}>Giá</th>
                  <th style={{ padding: 0 }}>Giảm giá</th>
                  <th style={{ padding: 0 }}>Trạng thái</th>
                  <th style={{ padding: 0 }}>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {alltourWithCategory.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: 0, fontSize: 16 }}>{index + 1}</td>
                    <td style={{ width: 110 }}><img style={{ width: 100, height: "auto", aspectRatio: 16 / 9, objectFit: "cover", borderRadius: 5, margin: "10px 0 10px 0" }} src={item.images} alt="" /></td>
                    <td style={{ padding: 0, fontSize: 16 }}>{item.title}</td>
                    <td style={{ padding: 0, fontSize: 16 }}>{(item.price).toLocaleString()}₫</td>
                    <td style={{ padding: 0, fontSize: 16 }}>{item.discount}%</td>
                    <td style={{ padding: 0 }}>{item.status === "active" ? (<span className="active">Hoạt động</span>) : (<><span className="inactive">Dừng hoạt động</span></>)}</td>
                    <td style={{ padding: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "93.05px" }}>

                      <span className="edit" onClick={() => handleClickEdit(item)}><AiOutlineEdit /></span>
                      {showEdit && (
                        <div className="show-model" style={{ textAlign: "left", boxShadow: "none", height: 500 }}>
                          <form onSubmit={handleEdit}>
                            <div className="tour-cate">
                              <div className="tour">
                                <label htmlFor="1">Tên tour</label>
                                <Input defaultValue={editData?.title} className="input-tour-title" id="1" placeholder="Nhập tên tour" />
                              </div>
                              <div className="cate">
                                <label>Chọn danh mục</label>
                                <Space wrap>
                                  <Select
                                    className="select-cate"
                                    placeholder="--chọn danh mục--"
                                    value={selectEdit}
                                    onChange={(value) => handleChangeSelect(value)}
                                    options={categoryOptions?.map((item) => ({
                                      value: item.id,
                                      label: item.title
                                    }))}
                                  />
                                </Space>
                              </div>
                            </div>
                            <div className="img-price">
                              <div className="price">
                                <label htmlFor="price">Nhập giá tiền</label>
                                <Input defaultValue={editData?.price} className="input-price" id="price" type="number" placeholder="Nhập giá" min={0} />
                              </div>
                              <div className="up-image">
                                <label htmlFor="img">Upload ảnh</label>
                                <Input defaultValue={editData?.images} id="img" className="input-img" placeholder="Thêm link ảnh" />
                              </div>
                            </div>
                            <div className="activity">
                              <label htmlFor="activity">Lịch trình</label>
                              <Input defaultValue={editData?.information} id="activity" className="input-activity" placeholder="Các hoạt động chính" />
                            </div>
                            <div className="time-place">
                              <div className="place">
                                <label htmlFor="place">Địa điểm</label>
                                <Input defaultValue={editData?.startPlace} id="place" className="input-place" type="text" placeholder="Nhập địa điểm" />
                              </div>
                              <div className="time">
                                <label htmlFor="time">Thời gian</label>
                                <Input defaultValue={editData?.schedule} id="time" className="input-time" placeholder="Thời gian" />
                              </div>
                            </div>
                            <div className="dis-time-quan">
                              <div className="discount">
                                <label htmlFor="discount">Giảm giá</label>
                                <Input defaultValue={editData?.discount} id="discount" className="input-discount" type="number" placeholder="Nhập % giảm giá" min={0} max={100} />
                              </div>
                              <div className="time-start">
                                <label >Thời gian khởi hành</label>
                                <TimePicker defaultValue={dayjs(editData?.timeStart, "HH:mm")} style={{ width: 240 }} format={format} />
                              </div>
                              <div className="quantity">
                                <label htmlFor="quantity">Số lượng vé</label>
                                <Input defaultValue={editData?.stock} id="quantity" className="quantity-input" type="number" placeholder="Nhập số lượng" min={0} />
                              </div>
                            </div>
                            <div className="status">
                              <label>Trạng thái</label>
                              <Radio.Group
                                name="status"
                                defaultValue={editData?.status}
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
                            <input defaultValue={editData?.id} type="number" style={{ display: "none" }} />
                            <button className="btn-insert-tour" type="submit">Sửa Tour</button>
                          </form>
                          <button onClick={handleEditCancel} className="btn-back" style={{ position: "relative", left: 750, bottom: 460, width: 20, height: 20, display: "flex", justifyContent: "center", alignItems: "center", border: "none", background: "red", color: "#fff", borderRadius: 5 }}>x</button>
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
export default TourManage;