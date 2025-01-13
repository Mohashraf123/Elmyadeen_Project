import * as React from "react";
import Logo from "../assets/logo/LOGO.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./NavBar.css";

function NavBar() {
  const { t, i18n } = useTranslation();
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen((prev) => !prev);
  };

  const toggleSetting = () => {
    setSettingOpen((prev) => !prev);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
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
              <NavLink to="/">{t("navbar.home")}</NavLink>
            </li>
            <li>
              <NavLink to="/about">{t("navbar.about")}</NavLink>
            </li>
            <li>
              <NavLink to="/products">{t("navbar.products")}</NavLink>
            </li>
            <li>
              <NavLink to="/projects">{t("navbar.projects")}</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">{t("navbar.contactUs")}</NavLink>
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
              <label htmlFor="options">{t("navbar.selectLanguage")}</label>
              <select
                id="options"
                name="options"
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
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
              {t("navbar.home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleSideNav}>
              {t("navbar.about")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={toggleSideNav}>
              {t("navbar.products")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={toggleSideNav}>
              {t("navbar.projects")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" onClick={toggleSideNav}>
              {t("navbar.contactUs")}
            </NavLink>
          </li>
        </ul>
        <label htmlFor="options">{t("navbar.selectLanguage")}</label>
              <select
                id="options"
                name="options"
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
      </div>
    </div>
  );
}

export default NavBar;
