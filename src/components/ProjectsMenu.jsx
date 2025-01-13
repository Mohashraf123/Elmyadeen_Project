import React, { useState } from "react";
import projectsData from "../Projects";
import './ProjectsMenu.css';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function AboutProjects() {
  const { t } = useTranslation(); // Initialize translation
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
    setTimeout(() => {
      document.querySelector('.modal').classList.add('show');
    }, 10);
  };

  const handleCloseModal = () => {
    const modalElement = document.querySelector('.modal');
    modalElement.classList.remove('show');
    setTimeout(() => {
      setShowModal(false);
      setCurrentImage(null);
    }, 400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="projects">
      {/* Translated title */}
      <h1 className="title">{t("aboutProjects.title")}</h1>
      <div className="projectscontiner">
        {projectsData.map((project) => (
          <div key={project.id} onClick={() => handleImageClick(project.image)}>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
     
      {showModal && (
        <div className="modalproject">
          <div className="modal-contentproject">
            <span className="closeproject" onClick={handleCloseModal}>&times;</span>
            <img src={currentImage} alt={t("aboutProjects.modalAlt")} />
          </div>
        </div>
      )}
    </div>
  );
}
