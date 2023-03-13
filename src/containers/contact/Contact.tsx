import { useMemo, useState } from "react";
import Footer from "../../components/footer/Footer";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { GrLocation } from "react-icons/gr";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import "./contact.scss";

type contactData = {
  name: string;
  phone: string;
  email: string;
  question: string;
};

const Contact = () => {
  const center = useMemo(
    () => ({
      lat: 26.366467050971632,
      lng: 43.95404330445937,
    }),
    []
  );

  const [contactFormData, setContactFormData] = useState<contactData>({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const contactFormHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(contactFormData);
  };

  //map loader
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  return (
    <>
      <section className="contact-section">
        <div className="info-container">
          <div className="map">
            {!isLoaded ? (
              <div>Loading...</div>
            ) : (
              <GoogleMap
                mapContainerStyle={{ width: "100%", minHeight: "90vh" }}
                zoom={11}
                center={center}
                mapContainerClassName="map-container"
              >
                <MarkerF position={center} title={"البداح"} />
              </GoogleMap>
            )}
          </div>
          <div className="info">
            <div className="details">
              <h3 className="title">شركة البداح العقارية</h3>
              <p>
                <GrLocation /> الرياض-بريدة-القصيم
              </p>
              <p>
                ساعات العمل من الأحد للخميس <br /> من الساعة 8 و حتى الساعة 2:30
              </p>
              <p className="phone">
                123 456 789 00 <BsTelephone />
              </p>
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
        <div className="container">
          <h1 className="title">تواصل معنا</h1>
          <form onSubmit={contactFormHandler}>
            <div className="row">
              <div className="col-sm-12">
                <label htmlFor="name">الاسم</label>
                <input
                  value={contactFormData?.name || ""}
                  onChange={(e) =>
                    setContactFormData({
                      ...contactFormData,
                      name: e.currentTarget.value,
                    })
                  }
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="phone">الهاتف / الجوال</label>
                <input
                  value={contactFormData?.phone || ""}
                  onChange={(e) =>
                    setContactFormData({
                      ...contactFormData,
                      phone: e.currentTarget.value,
                    })
                  }
                  type="phone"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="email">البريد الالكتروني</label>
                <input
                  value={contactFormData?.email || ""}
                  onChange={(e) =>
                    setContactFormData({
                      ...contactFormData,
                      email: e.currentTarget.value,
                    })
                  }
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="question">رسالة استفسار</label>
                <textarea
                  value={contactFormData?.question || ""}
                  onChange={(e) =>
                    setContactFormData({
                      ...contactFormData,
                      question: e.currentTarget.value,
                    })
                  }
                  id="question"
                  name="question"
                />
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

export default Contact;
