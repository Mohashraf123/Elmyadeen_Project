import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div className='head'>
      <header>
        <div className='content'>
          <h1>شركة الميادين لمواد البناء والخرسانة الجاهزة</h1>
          <h3>هى شركة رائدة ذات علامة تجارية موثوق بها في كل قطاع نعمل به. حيث نسعى إلى التقدم والانتشار إقليميا من خلال سياسة واستراتيجية ثابتة ومدروسة لتحقيق النجاح للشركة ولمن يعمل معها من الشركات الزميلة</h3>
          <NavLink to='/contactus' className='navlink'>تواصل معنا</NavLink>

        </div>


      </header>
      
    </div>
  )
}
