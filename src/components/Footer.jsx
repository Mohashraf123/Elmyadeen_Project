import React from "react";
import './Footer.css'
import Logo from '../assets/logo/LOGO.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Icon } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footercontainer">
        <div className="contact">
          <h2>اتصل بنا</h2>
          <ul>
            <li><a href="#"><h3>4467658675</h3> <span><LocalPhoneIcon/></span></a> </li>
            <li><a href="#"><h3>54678578675467</h3> <span><WhatsAppIcon/></span></a> </li>
            <li><a href="#"><h3>elmayadeen@gmail.com</h3> <span><EmailIcon/></span></a> </li>
          </ul>

        </div>

        <div className="sociallinks">
          <div className="footLogo">
            <img src={Logo} alt="" />
            <h3>شركة الميادين لمواد البناء والخرسانة الجاهزة</h3>

          </div>

          <ul>
            <li><a href="#"><FacebookIcon className="icon"/></a></li>
            <li><a href="#"><InstagramIcon className="icon"/></a></li>
            <li><a href="#"><XIcon className="icon"/></a></li>
          </ul>

        </div>

        <div className="pages">
          <h2>الصفحات</h2>
          <ul>
            <li><NavLink to='/' className='Link'>الرئيسية</NavLink></li>
            <li><NavLink to='/about' className='Link'>من نحن</NavLink></li>
            <li><NavLink to='/products' className='Link'>المنتجات</NavLink></li>
            <li><NavLink to='/projects' className='Link'>المشاريع</NavLink></li>
            <li><NavLink to='/contactus' className='Link'>تواصل معنا</NavLink></li>
          </ul>

        </div>
      </div>
      <p className="copyright">جميع حقوق النشر محفوظة لشركة الميادين &copy; 2025</p>
    </div>
  );
}
