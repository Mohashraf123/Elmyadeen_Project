import React from "react";
import vec1 from "../assets/viechels/vec1.jpeg";
import vec2 from "../assets/viechels/vec2.jpeg";
import vec3 from "../assets/viechels/vec3.jpeg";
import vec4 from "../assets/viechels/vec4.jpeg";
import vec5 from "../assets/viechels/vec5.jpeg";
import vec6 from "../assets/viechels/vec6.jpeg";
import { useTranslation } from "react-i18next"; // Import the translation hook
import "./Vicheles.css";

function Vicheles() {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className="vecs">
      {/* Translated title */}
      <h2 className="title">{t("vehicles.title")}</h2>
      <div className="container">
        <div className="vec">
          <img src={vec1} alt="" />
        </div>
        <div className="vec">
          <img src={vec2} alt="" />
        </div>
        <div className="vec">
          <img src={vec3} alt="" />
        </div>
        <div className="vec">
          <img src={vec4} alt="" />
        </div>
        <div className="vec">
          <img src={vec5} alt="" />
        </div>
        <div className="vec">
          <img src={vec6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Vicheles;
