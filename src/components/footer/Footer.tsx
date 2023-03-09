import React from "react";
import "./footer.scss";
import whiteLogo from "../../assets/white_logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="logo">
              <img src={whiteLogo} alt="albdah_logo" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="quick-links">
              <h4>روابط سريعة</h4>
              <div className="all-links">
                <ul className="first-links">
                  <li>
                    <Link to={"/about"}>عنا</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>تواصل معنا</Link>
                  </li>
                  <li>
                    <Link to={"/joinUs"}>انضم لنا</Link>
                  </li>
                </ul>
                <ul className="second-links">
                  <li>
                    <Link to={"/#"}>اضافة عقار</Link>
                  </li>
                  <li>
                    <Link to={"/getRate"}>طلب تقييم</Link>
                  </li>
                  <li>
                    <Link to={"/#"}>اضافة طلب</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="account-options">
              <h4>معلومات الحساب</h4>
              <ul className="account-links">
                <li>
                  <Link to={"/login"}>تسجيل الدخول</Link>
                </li>
                <li>
                  <Link to={"/getRate"}>انشاء الحساب</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="follow-us">
              <h4>تابعنا على</h4>
              <div className="icons">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.whatsapp.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImLinkedin2 />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">
          شركة البداح العقارية &copy; 2022 جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
