import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="head">
      <header>
        <div className="content">
          <h1>{t("header.title")}</h1>
          <h3>{t("header.description")}</h3>
          <NavLink to="/contactus" className="navlink">
            {t("header.contact")}
          </NavLink>
        </div>
      </header>
    </div>
  );
}
