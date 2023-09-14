import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAdd from "./FormAdd";
import FormEdit from "./FormEdit";
import { deleteById, getAllProduct } from "../services/productServices";
import Modal from "./base/Modal";

export default function Product() {
  const [showAdd, setShowAdd] = useState(false);
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.data);
  const [showEdit, setShowEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  // Hàm xóa thông tin 1 product theo id
  const handleDelete = (id) => {
    // dispatch(deleteById(id));
  };

  // Đóng modal

  // Mở Form Add
  const handleShowForm = () => {
    setShowAdd(true);
  };
  // Đóng Form Add
  const handleCloseForm = () => {
    setShowAdd(false);
  };

  // Mở Form Edit
  const handleShowEdit = (id) => {
    setShowEdit(true);
    setIdEdit(id);
  };
  // Đóng form Edit
  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  return (
    <>
      {/* Form thêm mới */}
      {showAdd && <FormAdd handleCloseForm={handleCloseForm} />}

      {/* Form edit */}
      {showEdit && (
        <FormEdit handleCloseEdit={handleCloseEdit} idEdit={idEdit} />
      )}

      {/* Form confirm delete */}
      {setShowModal && <Modal onOk={handleDelete} onCancel={handleCancel} />}

      <h1>List Product</h1>
      <button className="btn btn-info" onClick={handleShowForm}>
        Thêm sản phẩm mới
      </button>
      <table border={1} className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>From</th>
            <th colSpan={2}>Option</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.ProductName}</td>
              <td>{product.Price}</td>
              <td>{product.From}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    handleShowEdit(product.id);
                  }}
                >
                  Sửa
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(product.id);
                  }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
