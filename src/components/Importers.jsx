import React from "react";
import Slider from "react-slick";  // Import the slider component
import "slick-carousel/slick/slick.css";  // Slick styles
import "slick-carousel/slick/slick-theme.css";
import Logo from "../assets/customers/cust1.jpeg";
import Logo2 from "../assets/customers/cust2.jpeg";
import Logo3 from "../assets/customers/cust3.jpeg";
import Logo4 from "../assets/customers/cust4.jpeg";
import Logo5 from "../assets/customers/cust5.jpeg";
import './importers.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

export default function Importers() {
  const { t } = useTranslation(); // Initialize useTranslation hook for translation

  const settings = {
    dots: true,          // Display navigation dots
    infinite: true,      // Infinite loop scrolling
    speed: 500,          // Transition speed
    slidesToShow: 4,     // Number of slides visible at a time
    slidesToScroll: 1,   // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="importers">
      <h1 className="title">{t("importers.title")}</h1> {/* Translated title */}
      <div className="importers-slider">
        <Slider {...settings}>
          <div>
            <img src={Logo} alt="Customer 1" />
          </div>
          <div>
            <img src={Logo2} alt="Customer 2" />
          </div>
          <div>
            <img src={Logo3} alt="Customer 3" />
          </div>
          <div>
            <img src={Logo4} alt="Customer 4" />
          </div>
          <div>
            <img src={Logo5} alt="Customer 5" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
