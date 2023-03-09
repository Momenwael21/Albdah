import React from "react";
import Footer from "../../components/footer/Footer";
import "./about.scss";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <h1 className="title">عن البداح للعقارات</h1>
          <p className="content">
            عملائنا الكرام تعلن شركة البداح للعقارات عن إطلاق النسخة التجريبية
            لمنصتاها العقارية المطوره لتقديم افضل الخدمات و الحلول التسويقية
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
