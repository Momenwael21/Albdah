import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import Footer from "../../components/footer/Footer";
import "./home.scss";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

type searchFilters = {
  type?: string;
  showFor?: string;
  buildClassification?: string;
  buildType?: string;
  useType?: string;
  price?: number[];
  buildAge?: number[];
  area?: string;
  city?: string;
  district?: string;
};

const Home = () => {
  const [orderBy, setOrderBy] = useState<string>("default");
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lang: 0 });
  const [searchFilters, setSearchFilters] = useState<searchFilters>({});

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentPosition({
        lat: position.coords.latitude,
        lang: position.coords.longitude,
      });
    });
  };

  //handle map
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  return (
    <>
      <section className="home-section">
        <div className="search-bar">
          <div className="search-field">
            <input
              type="search"
              name="searchWord"
              className="search-word"
              id="searchWord"
              placeholder="بحث..."
              onFocus={() => {
                document
                  .querySelector(".get-location")
                  ?.classList.remove("d-none");
                document
                  .querySelector(".get-location")
                  ?.classList.add("d-block");
              }}
              onBlur={() => {
                document
                  .querySelector(".get-location")
                  ?.classList.remove("d-block");
                document
                  .querySelector(".get-location")
                  ?.classList.add("d-none");
              }}
            />
            <AiOutlineSearch />

            <button className="get-location d-none" onClick={getLocation}>
              <GrLocation /> موقعى الحالى
            </button>
          </div>
          <div className="build-number">
            <input
              type="search"
              name="buildNumber"
              id="buildNumber"
              placeholder="رقم العقار..."
            />
          </div>
          <div className="advanced-filters">
            <button
              onClick={() => {
                let form = document.querySelector(".advanced-search");
                if (form?.classList.contains("d-flex")) {
                  form?.classList.remove("d-flex");
                  form?.classList.add("d-none");
                } else {
                  form?.classList.remove("d-none");
                  form?.classList.add("d-flex");
                }
              }}
              className="more"
            >
              المزيد
            </button>
            <form className="advanced-search d-none">
              <div className="row">
                <div className="col-12">
                  <div className="build-type">
                    <label htmlFor="buildType">نوع العقار</label>
                    <Select
                      value={searchFilters?.buildType || "default"}
                      onChange={(e) => {
                        const target = e.target as HTMLFormElement & {
                          value: string;
                        };
                        setSearchFilters({
                          ...searchFilters,
                          buildType: target.value,
                        });
                      }}
                      labelId="buildType"
                      id="demo-controlled-open-select"
                    >
                      <MenuItem value={"default"}></MenuItem>

                      <MenuItem value={"workersHomes"}>سكن عمال</MenuItem>
                      <MenuItem value={"showRooms"}>صالات عرض</MenuItem>
                      <MenuItem value={"groundFloor"}>دور أرضى</MenuItem>
                      <MenuItem value={"workshop"}>ورشة</MenuItem>
                      <MenuItem value={"shop"}>محل</MenuItem>
                      <MenuItem value={"lounge"}>استراحة</MenuItem>
                      <MenuItem value={"apartment"}>شقة</MenuItem>
                      <MenuItem value={"duplex"}>دوبلكس</MenuItem>
                    </Select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="build-classification">
                    <p>تصنيف العقار</p>
                    <div className="livivng">
                      <input
                        type="radio"
                        name="buildClassification"
                        id="living"
                      />
                      <label htmlFor="living">سكني</label>
                    </div>
                    <div className="commercial">
                      <input
                        type="radio"
                        name="buildClassification"
                        id="commercial"
                      />
                      <label htmlFor="commercial">تجاري</label>
                    </div>
                    <div className="agricultural">
                      <input
                        type="radio"
                        name="buildClassification"
                        id="agricultural"
                      />
                      <label htmlFor="agricultural">زراعي</label>
                    </div>
                    <div className="industrial">
                      <input
                        type="radio"
                        name="buildClassification"
                        id="industrial"
                      />
                      <label htmlFor="industrial">صناعي</label>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="use-type">
                    <p>نوع الاستعمال</p>
                    <div className="singles">
                      <input type="radio" name="useType" id="singles" />
                      <label htmlFor="singles">عزاب</label>
                    </div>
                    <div className="families">
                      <input type="radio" name="useType" id="families" />
                      <label htmlFor="families">عوائل</label>
                    </div>
                    <div className="office">
                      <input type="radio" name="useType" id="office" />
                      <label htmlFor="office">مكتبي</label>
                    </div>
                    <div className="singles-families">
                      <input type="radio" name="useType" id="singlesFamilies" />
                      <label htmlFor="singlesFamilies">عزاب و عوائل</label>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="show-for">
                    <p>نوع العرض</p>
                    <div className="rent">
                      <input type="radio" name="showFor" id="rent" />
                      <label htmlFor="rent">إيجار</label>
                    </div>
                    <div className="sale">
                      <input type="radio" name="showFor" id="sale" />
                      <label htmlFor="sale">بيع</label>
                    </div>
                    <div className="auction">
                      <input type="radio" name="showFor" id="auction" />
                      <label htmlFor="auction">مزاد</label>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="price">
                    <input
                      type="text"
                      name="priceFrom"
                      placeholder="السعر من"
                    />
                    <p>-</p>
                    <input type="text" name="priceTo" placeholder="السعر إلى" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="age">
                    <input type="text" name="ageFrom" placeholder="العمر من" />
                    <p>-</p>
                    <input type="text" name="ageTo" placeholder="العمر إلى" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-footer">
                    <input type="submit" value={"تأكيد"} />
                    <input type="reset" className="clear" value={"تفريغ"} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            <div className="ads-container">
              <div className="order-by">
                <Select
                  value={orderBy || "default"}
                  onChange={(e) => {
                    const target = e.target as HTMLFormElement & {
                      value: string;
                    };
                    setOrderBy(target.value);
                  }}
                  labelId="area"
                  id="demo-controlled-open-select"
                >
                  <MenuItem value={"default"}>ترتيب بحسب</MenuItem>

                  <MenuItem value={"price-desc"}>السعر(الأدنى أولا)</MenuItem>
                  <MenuItem value={"price-asc"}>السعر(الأعلى أولا)</MenuItem>
                  <MenuItem value={"space"}>المساحة</MenuItem>
                  <MenuItem value={"newest"}>الأحدث</MenuItem>
                </Select>
                <p className="result-number">عدد النتائج: 366</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-7">
            {isLoaded ? (
              <GoogleMap
                center={{ lat: 74, lng: 60 }}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                zoom={9}
                mapContainerClassName="map-container"
              ></GoogleMap>
            ) : (
              "Hello"
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
