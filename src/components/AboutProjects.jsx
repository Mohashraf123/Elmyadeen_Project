import React, { useState } from "react";
import Logo from "../assets/projects/pro1.jpeg";
import Logo2 from "../assets/projects/pro2.jpeg";
import Logo3 from "../assets/projects/pro3.jpeg";
import Logo5 from "../assets/projects/pro6.jpeg";
import './AboutProjects.css';
import { Link } from "react-router-dom";

export default function AboutProjects() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

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

  return (
    <div className="aboutproject">
      <h1 className="title">نبذة عن المشاريع</h1>
      <div className="aboutcontiner">
        <div onClick={() => handleImageClick(Logo)}>
          <img src={Logo} alt="" />
        </div>
        <div onClick={() => handleImageClick(Logo2)}>
          <img src={Logo2} alt="" />
        </div>
        <div onClick={() => handleImageClick(Logo3)}>
          <img src={Logo3} alt="" />
        </div>
        <div onClick={() => handleImageClick(Logo5)}>
          <img src={Logo5} alt="" />
        </div>
      </div>
      <Link className="link" to="/projects">عرض المزيد</Link>

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
