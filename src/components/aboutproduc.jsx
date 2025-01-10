import React from "react";
import Logo from "../assets/cement/cement1.png";
import Logo2 from "../assets/cement/cement2.png";


import './AboutProduc.css'
import Accordion from "./Accordion";
import AccordionUsage from "./Accordion";
import { Link } from "react-router-dom";

export default function AboutProduc() {
  return (
    <div className="aboutProduc">
      <h1 className="title">نبذة عن منتجاتنا</h1>
      <div className="aboutcontiner">
        <div>
            <img src={Logo} alt="" />
            <h2>اسمنت</h2>
            <Link className="link" to='/products'>تفاصيل المنتج</Link>
        </div>
        <div>
            <img src={Logo2} alt="" />
            <h2>اسمنت</h2>
            <Link className="link" to='/products'>تفاصيل المنتج</Link>
        </div>
        <div>
            <img src={Logo2} alt="" />
            <h2>اسمنت</h2>
            <Link className="link" to='/products'>تفاصيل المنتج</Link>
        </div> 
      </div>
      <Link className="link" to="/products">عرض المزيد</Link>
      
    </div>
  );
}
