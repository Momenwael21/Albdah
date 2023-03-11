import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import { ksaRegions, ksaCities, ksaDistricts } from "../../ksaRegions";
import "./getRate.scss";

type formData = {
  name: string;
  phone: string;
  buildType: string;
  area: {
    name: string;
    id: number;
  };
  city: {
    name: string;
    id: number;
  };
  district: {
    name: string;
    id: number;
  };
};

const GetRate = () => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    phone: "",
    buildType: "",
    area: { name: "", id: 0 },
    city: { name: "", id: 0 },
    district: { name: "", id: 0 },
  });
  return (
    <>
      <section className="getRate-section">
        <div className="container">
          <h1 className="title">طلب تقييم</h1>
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e?.preventDefault();
              console.log(formData);
            }}
          >
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label htmlFor="name">الاسم</label>
                <input
                  type="text"
                  value={formData?.name || ""}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.currentTarget.value });
                  }}
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="phone">الهاتف / الجوال</label>
                <input
                  type="phone"
                  value={formData?.phone || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.currentTarget.value })
                  }
                  id="phone"
                  name="phone"
                  required
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="buildType">نوع العقار</label>
                <input
                  type="text"
                  value={formData?.buildType || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      buildType: e.currentTarget.value,
                    })
                  }
                  id="buildType"
                  name="buildType"
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="area">المنطقة</label>
                <Select
                  labelId="area"
                  id="demo-controlled-open-select"
                  value={JSON.stringify(formData.area) || ""}
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement & {
                      value: { name: string; id: number };
                    };
                    console.log(JSON.parse(target.value));
                    setFormData({
                      ...formData,
                      area: JSON.parse(target?.value),
                    });
                  }}
                >
                  <MenuItem
                    value={JSON.stringify({
                      name: "",
                      id: 0,
                    })}
                  >
                    <em>None</em>
                  </MenuItem>
                  {ksaRegions?.map((region) => (
                    <MenuItem
                      key={region?.region_id}
                      value={JSON.stringify({
                        name: region?.name_ar,
                        id: region?.region_id,
                      })}
                    >
                      {region.name_ar}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="city">المدينة</label>
                <Select
                  labelId="city"
                  id="demo-controlled-open-select"
                  value={JSON.stringify(formData.city) || ""}
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement & {
                      value: { name: string; id: number };
                    };
                    console.log(JSON.parse(target.value));
                    setFormData({
                      ...formData,
                      city: JSON.parse(target?.value),
                    });
                  }}
                >
                  <MenuItem
                    value={JSON.stringify({
                      name: "",
                      id: 0,
                    })}
                  >
                    <em>None</em>
                  </MenuItem>
                  {formData?.area?.name !== "" &&
                    ksaCities
                      ?.filter((city) => city.region_id === formData.area.id)
                      .map((city) => (
                        <MenuItem
                          key={city?.city_id}
                          value={JSON.stringify({
                            name: city?.name_ar,
                            id: city?.city_id,
                          })}
                        >
                          {city.name_ar}
                        </MenuItem>
                      ))}
                </Select>
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="district">الحى</label>
                <Select
                  labelId="district"
                  id="demo-controlled-open-select"
                  value={JSON.stringify(formData.district) || ""}
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement & {
                      value: { name: string; id: number };
                    };
                    console.log(JSON.parse(target.value));
                    setFormData({
                      ...formData,
                      district: JSON.parse(target?.value),
                    });
                  }}
                >
                  <MenuItem
                    value={JSON.stringify({
                      name: "",
                      id: 0,
                    })}
                  >
                    <em>None</em>
                  </MenuItem>
                  {formData?.city?.name !== "" &&
                    ksaDistricts
                      ?.filter(
                        (district) => district.city_id === formData.city.id
                      )
                      .map((district) => (
                        <MenuItem
                          key={district?.district_id}
                          value={JSON.stringify({
                            name: district?.name_ar,
                            id: district?.city_id,
                          })}
                        >
                          {district.name_ar}
                        </MenuItem>
                      ))}
                </Select>
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

export default GetRate;
