import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/about.jpg";
import "./About.css";
import Accordion from "./Accordion";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h1 className="title">{t("about.title")}</h1>
      <div className="aboutcontiner">
        <div className="aboutdiscrip">
          <h1>{t("about.heading")}</h1>
          <p>{t("about.description")}</p>
        </div>
        <div>
          <img src={Logo} alt="About Us" />
        </div>
      </div>
      <Accordion />
    </div>
  );
}
