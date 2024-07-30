import React from "react";
import AddNewBlog from "./AddNewBlog";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
const Modal = ({
  setForm,
  form,
  handleSubmit,
  setIsShowModal,
  productToUpdate,
  setProductToUpdate,
  setProducts,
}) => {
  function handleClose() {
    setIsShowModal(false);
    setProductToUpdate(null);
    setForm({
      name: "",
      image: "",
      description: "",
      author: "",
      date: "",
    });
  }
  return createPortal(
    <>
      <AddNewBlog
        handleClose={handleClose}
        setForm={setForm}
        form={form}
        handleSubmit={handleSubmit}
        setProducts={setProducts}
        productToUpdate={productToUpdate}
        setIsShowModal={setIsShowModal}
        setProductToUpdate={setProductToUpdate}
      />
    </>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  setIsShowModal: PropTypes.func,
};

export default Modal;
