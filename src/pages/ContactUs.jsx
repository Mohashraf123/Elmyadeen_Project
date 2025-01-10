import React, { useEffect } from 'react'
import { motion } from 'framer-motion'; // For animations on load
import AOS from 'aos'; // For scroll animations
import 'aos/dist/aos.css'; // Import AOS styles
import Header from '../components/Header';
import About from '../components/About';
import AboutProduc from '../components/aboutproduc';
import AboutProjects from '../components/AboutProjects';
import Importers from '../components/Importers';

export default function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensures animation runs only once
    });
  }, []);
  return (
    <div>
    {/* Using Framer Motion for page load animations */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Header />
    </motion.div>
    
    {/* AOS for scroll-based animations */}
    <div data-aos="fade-up">
      <div>contact us</div>
    </div>
    
   

  </div>
  )
}
