import React from "react";
import "../../styles/Header.css";
import logo from "../../assets/3d.jpg";
import { FaPlus } from "react-icons/fa";

const Header = ({ setIsShowModal, showModal }) => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="__a">
          <img src={logo} alt="" />
          <h1>Blog App</h1>
        </div>
        <div className="__b">
          <span onClick={() => setIsShowModal(!showModal)}>
            <FaPlus />
            Yeni Bir Blog Oluştur
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
