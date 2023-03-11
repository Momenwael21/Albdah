import React from "react";
import whiteLogo from "../../assets/white_logo.png";
import "./login.scss";

const Login = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <div className="hide-in-mobile col-lg-6">
            <div className="first-square"></div>
            <div className="second-square"></div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="data-col">
              <div className="brand-lang">
                <img src={whiteLogo} alt="logo" />
                <button className="lang">EN</button>
              </div>
              <div className="login-form">
                <h2>تسجيل الدخول</h2>
                <form>
                  <div className="idInput">
                    <label htmlFor="nationalId">رقم الهوية</label>
                    <input
                      type="text"
                      id="nationalId"
                      placeholder="رقم الهوية الخاص بك"
                    />
                  </div>
                  <div className="passwordInput">
                    <label htmlFor="nationalId">كلمة المرور</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="كلمة المرور الخاص بك"
                    />
                  </div>
                  <div className="forget-password">
                    <button>نسيت كلمة المرور؟</button>
                  </div>
                  <div className="sign-buttons">
                    <input
                      type={"submit"}
                      className="login-btn"
                      value={"تسجيل الدخول"}
                    />
                    <button className="signup-btn">إنشاء حساب</button>
                  </div>
                  <div className="policies-privacy">
                    <div className="plicies">
                      <a href="tel:+201114140551">الاتصال بنا</a> /
                      <a href="/#">الشروط و الأحكام</a>
                    </div>
                    <div className="privacy">
                      <a href="/#">سياسة الخصوصية</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
