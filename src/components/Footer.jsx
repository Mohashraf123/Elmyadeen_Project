import React from "react";
import "./Footer.css";
import Logo from "../assets/logo/LOGO.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from '@mui/icons-material/Place';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import the translation hook
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export default function Footer() {
  const { t } = useTranslation(); // Initialize the translation hook

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer">
      <div className="footercontainer">
        <div className="contact">
          <h2>{t("footer.contact")}</h2> {/* Translate "اتصل بنا" / "Contact Us" */}
          <ul>
            <li>
              <a href="tel:50792525">
                <h3>50792525</h3>
                <span>
                  <LocalPhoneIcon />
                </span>
              </a>
            </li>
            <li>
              <a href="tel:41045044">
                <h3>41045044</h3>
                <span>
                  <LocalPhoneIcon />
                </span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/96550792525" target="_blank" rel="noopener noreferrer">
                <h3>+965 507 92525</h3>
                <span>
                  <WhatsAppIcon />
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:almayadeenkw@gmail.com">
                <h3>almayadeenkw@gmail.com</h3>
                <span>
                  <EmailIcon />
                </span>
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/3cQUDjnwmx76gEuQ6">
                <h3>
                  {t("footer.address")}
                </h3>
                <span>
                  <PlaceIcon />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sociallinks">
          <div className="footLogo">
            <img src={Logo} alt="" />
            <h3>
              {t("footer.discrip")}
              </h3>
          </div>

          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100088837283592&sk=about">
                <FacebookIcon className="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/almayadeenkw?igsh=aWRvZWgwa3JreXRz">
                <InstagramIcon className="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <XIcon className="icon" />
              </a>
            </li>
          </ul>
        </div>

        <div className="pages">
          <h2>{t("footer.pages")}</h2> {/* Translate "الصفحات" / "Pages" */}
          <ul>
            <li>
              <NavLink to="/" className="Link" onClick={scrollToTop}>
                {t("footer.home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="Link" onClick={scrollToTop}>
                {t("footer.about")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="Link" onClick={scrollToTop}>
                {t("footer.products")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="Link" onClick={scrollToTop}>
                {t("footer.projects")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactus" className="Link" onClick={scrollToTop}>
                {t("footer.contactUs")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        {t("footer.copyright")} {/* Translate the copyright message */}
      </p>
    </div>
  );
}
