import React from "react";
import Footer from "../../components/footer/Footer";
import "./joinUs.scss";

const JoinUs = () => {
  const formHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement & {
      name: { value: string };
      phone: { value: string };
      email: { value: string };
      location: { value: string };
    };
    console.log(target?.name?.value);
    console.log(target?.phone?.value);
    console.log(target?.email?.value);
    console.log(target?.location?.value);
  };
  return (
    <>
      <section className="joinUs-section">
        <div className="container">
          <h1 className="title">انضم إلينا</h1>
          <form onSubmit={formHandler}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label htmlFor="name">الاسم</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="phone">الهاتف / الجوال</label>
                <input type="phone" id="phone" name="phone" required />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="email">البريد الالكتروني</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="location">الموقع</label>
                <input type="text" id="location" name="location" />
              </div>
            </div>
            <input type="submit" className="submit-button" value={"ارسال"} />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JoinUs;
