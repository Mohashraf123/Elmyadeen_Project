import React from "react";
import Logo from "../assets/about.jpg";
import './About.css'
import Accordion from "./Accordion";
import AccordionUsage from "./Accordion";

export default function About() {
  return (
    <div className="about">
      <h1 className="title">نبذة عن الشركة</h1>
      <div className="aboutcontiner">
        <div className="aboutdiscrip">
          <h1>نحن شركة الميادين</h1>
          <p>
            تم تأسيس شركة الميادين المتميزة للتجارة العامة والمقاولات عام 2003
            تحت ترخيص مزاولة المهنة رقم (2126)، وتم تسجيلها بالسجل التجاري رقم
            (96554)، كما تم قيدها بغرفة تجارة وصناعة الكويت عام 2014 تحت رقم
            (148103) لمزاولة نشاط التجارة العامة والمقاولات بدولة الكويت
            وخارجها، هى شركة رائدة ذات علامة تجارية موثوق بها في كل قطاع نعمل
            به. حيث نسعى إلى التقدم والانتشار إقليميا من خلال سياسة واستراتيجية
            ثابتة ومدروسة لتحقيق النجاح للشركة ولمن يعمل معها من الشركات الزميلة
          </p>
        </div>

        <div>
          <img src={Logo} alt="" />
        </div>
      </div>
      <Accordion/>
    </div>
  );
}
