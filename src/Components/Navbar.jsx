import "./Navbar.css";
import logo from "../assets/logo.svg";
import { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";

const Navbar = () => {
  const [, setMenu] = useState("Home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("Home")}>Home</p>{" "}
          </AnchorLink>{" "}
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#about">
            {" "}
            <p onClick={() => setMenu("About")}>About Me</p>{" "}
          </AnchorLink>{" "}
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#service">
            {" "}
            <p onClick={() => setMenu("Services")}>Services</p>{" "}
          </AnchorLink>{" "}
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#work">
            {" "}
            <p onClick={() => setMenu("Portfolio")}>Portfolio</p>{" "}
          </AnchorLink>{" "}
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            <p onClick={() => setMenu("Contact")}>Contact</p>{" "}
          </AnchorLink>{" "}
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          {" "}
          Connect With Me{" "}
        </AnchorLink>{" "}
      </div>
    </div>
  );
};

export default Navbar;
