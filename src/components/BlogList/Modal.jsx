import React from "react";
import AddNewBlog from "./AddNewBlog";
const Modal = ({ setForm, form, handleSubmit, setIsShowModal }) => {
  function handleClose() {
    setIsShowModal(false);
  }
  return (
    <>
      <AddNewBlog
        handleClose={handleClose}
        setForm={setForm}
        form={form}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Modal;
