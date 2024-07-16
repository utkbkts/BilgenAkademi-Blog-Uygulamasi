import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import "../../styles/Header.css";
import logo from "../../assets/3d.jpg";
const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="__a">
          <img src={logo} alt="" />
          <h1>Blog App</h1>
        </div>
        <div>
          <Link to={"/create"}>
            <Button color="primary" size="md">
              +Create
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
