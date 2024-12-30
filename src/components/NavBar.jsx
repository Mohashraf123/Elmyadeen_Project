import * as React from "react";
import Logo from "../assets/logo/LOGO.png";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import SideNav from "./SideNav";

function NavBar() {
  const[settingopen,SetSettingOpen]=useState(false)
  

  const setting=settingopen
  const handlesetting=()=>{
    if(settingopen===true){
      SetSettingOpen(false)
      console.log(settingopen)
    }else{
      SetSettingOpen(true)
      console.log(settingopen)
    }


  }
  return (
    <div className="navbar">
      <nav>
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>

        <div className="navlinks">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        <div className="setting">
          <button className="bar">
            <i className="fa-solid fa-bars"></i>
          </button>
          <button className="seticon" onClick={handlesetting}>
            <i className="fa-solid fa-gear"></i>
          </button>
          {settingopen && (
             <div className="setting-cont" >
             <label htmlFor="options">Select Language:</label>
             <select id="options" name="options">
               <option value="option1">Arabic</option>
               <option value="option2">English</option>
             </select>
             
           </div>
          )}
         
        </div>
      </nav>
          <SideNav/>
    </div>
  );
}
export default NavBar;
