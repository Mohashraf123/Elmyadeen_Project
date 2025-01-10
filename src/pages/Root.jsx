import React from 'react';
import { Fade } from 'react-awesome-reveal';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Root() {
  return (
    <div>
      <Fade duration={1000}>
        <NavBar />
      </Fade>
      
      <Outlet />
      
      <Fade duration={1000} delay={200}>
        <Footer />
      </Fade>
    </div>
  );
}
