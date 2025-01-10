import * as React from "react";
import Logo from "../assets/logo/LOGO.png";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

function NavBar() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen((prev) => !prev);
  };

  const toggleSetting = () => {
    setSettingOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <nav>
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="navlinks">
          <ul>
            <li>
              <NavLink to="/">الرئيسية</NavLink>
            </li>
            <li>
              <NavLink to="/about">من نحن</NavLink>
            </li>
            <li>
              <NavLink to="/products">المنتجات</NavLink>
            </li>
            <li>
              <NavLink to="/projects">المشاريع</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">تواصل معنا</NavLink>
            </li>
          </ul>
        </div>

        <div className="setting">
          <button className="bar" onClick={toggleSideNav}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <button className="seticon" onClick={toggleSetting}>
            <i className="fa-solid fa-gear"></i>
          </button>
          {settingOpen && (
            <div className="setting-cont">
              <label htmlFor="options">Select Language:</label>
              <select id="options" name="options">
                <option value="arabic">Arabic</option>
                <option value="english">English</option>
              </select>
            </div>
          )}
        </div>
      </nav>

      <div className={`sidenav ${sideNavOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={toggleSideNav}>
          &times;
        </button>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleSideNav}>
              الرئيسية
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleSideNav}>
              من نحن
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={toggleSideNav}>
              المنتجات
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={toggleSideNav}>
              المشاريع
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" onClick={toggleSideNav}>
              تواصل معنا 
            </NavLink>
          </li>
        </ul>

        {/* Language Selection in SideNav */}
        <div className="setting-cont-sidenav">
          <label htmlFor="options">اختر اللغة:</label>
          <select id="options" name="options">
            <option value="arabic">العربية</option>
            <option value="english">الانجليزية</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default NavBar;