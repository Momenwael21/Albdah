import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import logo from "../../assets/logo.webp";
import smallLogo from "../../assets/albdah_slogan.png";
import "./navbar.scss";
import { useSpring } from "react-spring";
import { animated } from "@react-spring/web";

const Navbar = () => {
  const location = useLocation();

  let dt = new Date();
  let months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  //moving text animation
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(100%,0)" },
    to: { transform: "translate(-200%,0)" },
    config: { duration: 25000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  //make a current page link active in nav
  useEffect(() => {
    let navLinks = document.querySelectorAll("nav>.container ul li");
    navLinks?.forEach((navLink) => {
      navLink?.classList.remove("active");
    });

    switch (location.pathname) {
      case "/":
        document
          .querySelector("nav>.container ul .home")
          ?.classList.add("active");
        break;

      case "/about":
        document
          .querySelector("nav>.container ul .about")
          ?.classList.add("active");
        break;

      case "/contact":
        document
          .querySelector("nav>.container ul .contact")
          ?.classList.add("active");
        break;

      case "/joinUs":
        document
          .querySelector("nav>.container ul .joinUs")
          ?.classList.add("active");
        break;

      case "/getRate":
        document
          .querySelector("nav>.container ul .getRate")
          ?.classList.add("active");
        break;

      default:
        document
          .querySelector("nav>.container ul .home")
          ?.classList.add("active");
        break;
    }
  }, [location]);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="info">
          <div className="container">
            <div className="date">
              <h4>{dt.getDate()}</h4>
              <p>{months[dt.getMonth()]}</p>
            </div>
            <div className="work-time">
              <p>اوقات العمل : 8:00 ص - 12:00 م 4:00 م - 9:30 م</p>
              <AiOutlineFieldTime />
            </div>
          </div>
        </div>
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <img src={logo} alt="albdah_logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <HiMenuAlt4 />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item home">
                <Link to={"/"} className="nav-link" aria-current="page">
                  الرئيسية
                </Link>
              </li>
              <li className="nav-item about">
                <Link to={"/about"} className="nav-link">
                  عنا
                </Link>
              </li>
              <li className="nav-item contact">
                <Link to={"/contact"} className="nav-link">
                  تواصل معنا
                </Link>
              </li>
              <li className="nav-item joinUs">
                <Link to={"/joinUs"} className="nav-link">
                  انضم إلينا
                </Link>
              </li>
              <li className="nav-item getRate">
                <Link to={"/getRate"} className="nav-link">
                  طلب تقييم عقاري
                </Link>
              </li>
            </ul>
            <div className="auth-lang">
              <Link to={""} className="add-building">
                إضافة عقار
              </Link>
              <Link to={"/login"} className="login">
                تسجيل الدخول
              </Link>
              <button className="change-language">EN</button>
            </div>
          </div>
          <div className="auth-lang">
            <Link to={""} className="add-building">
              إضافة عقار
            </Link>
            <Link to={"/login"} className="login">
              تسجيل الدخول
            </Link>
            <button className="change-language">EN</button>
          </div>
        </div>
      </nav>
      <div className="moving-text">
        <animated.div style={scrolling} className="ads-container" key={key}>
          <img src={smallLogo} alt="albdah_logo" />
          <p>
            حي الجامعة - عمارة 15 - حي الجامعه حي الجامعة - عمارة 15 - حي
            الجامعه حي الجامعة - عمارة 15 - حي الجامعه
          </p>
        </animated.div>
      </div>
    </>
  );
};

export default Navbar;
