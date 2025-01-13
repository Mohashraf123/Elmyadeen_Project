import React, { useState } from "react";
import Logo from "../assets/projects/proj1.jpeg";
import Logo2 from "../assets/projects/proj2.jpeg";
import Logo3 from "../assets/projects/proj3.jpeg";
import Logo5 from "../assets/projects/proj6.jpeg";
import './AboutProjects.css';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

export default function AboutProjects() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const { t } = useTranslation(); // Initialize useTranslation

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
    setTimeout(() => {
      document.querySelector('.modal').classList.add('show');
    }, 10);  // Small timeout to ensure class is applied after rendering
  };

  const handleCloseModal = () => {
    const modalElement = document.querySelector('.modal');
    modalElement.classList.remove('show');
    setTimeout(() => {
      setShowModal(false);
      setCurrentImage(null);
    }, 400);  // Match this with the CSS transition duration
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
  };

  return (
    <div className="aboutproject">
      <h1 className="title">{t("aboutProjects.title")}</h1>
      <div className="aboutcontiner">
        <div onClick={() => handleImageClick(Logo)}>
          <img src={Logo} alt="Project 1" />
        </div>
        <div onClick={() => handleImageClick(Logo2)}>
          <img src={Logo2} alt="Project 2" />
        </div>
        <div onClick={() => handleImageClick(Logo3)}>
          <img src={Logo3} alt="Project 3" />
        </div>
        <div onClick={() => handleImageClick(Logo5)}>
          <img src={Logo5} alt="Project 4" />
        </div>
      </div>
      <Link className="link" to="/projects" onClick={scrollToTop}>
        {t("aboutProjects.viewMore")}
      </Link>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={currentImage} alt="Project" />
          </div>
        </div>
      )}
    </div>
  );
}
