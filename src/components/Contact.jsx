import React from "react";
import "./Contact.css";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next"; // Import useTranslation

function Contact() {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className="Contact">
      <div className="contact-container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.694295895361!2d47.9693551!3d29.2913031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9bda292d4355%3A0x796575d8b4e7da3!2z2LTYsdmD2Kkg2KfZhNmF2YrYp9iv2YrZhiDYp9mE2YXYqtmF2YrYstipINmE2YTYqtis2KfYsdipINin2YTYudin2YXYqSDZiNin2YTZhdmC2KfZiNmE2KfYqg!5e0!3m2!1sar!2seg!4v1736701330224!5m2!1sar!2seg"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-details">
          {/* Translated title */}
          <h2>{t("contact.title")}</h2>
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
              <a
                href="https://wa.me/96550792525"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                {/* Translated address */}
                <h3>{t("contact.address")}</h3>
                <span>
                  <PlaceIcon />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
