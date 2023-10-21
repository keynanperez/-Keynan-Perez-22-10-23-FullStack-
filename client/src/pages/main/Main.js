import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import City from "../../components/City";
import Favorites from "../favorites/Favorites";


function Main() {
  const [city, setCity] = useState("");
  const [cityId, setCityId] = useState("");
  const [cityName, setCityName] = useState("");

  const [cities, setCities] = useState();

  const api = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=E05a8Q5FHipXGoUQWH0R90KsEFw4z7AA&q=";

  const searchCity = (e) => {
    setCity(e.target.value);
    alert(city);
    getCities();
  };
  const getCities = async () => {
    const ct = await axios.get(api + city);
    setCities(ct.data);
    console.log(cities);
  };

  const selectCity = (e) => {
    //alert(e.target.value)
    setCityName(e.target.innerText);
    console.log(e);

    setCityId(e.target.value);
  };
  return (
    <div>
      <div style={{ width: "70%", float: "left" }}>
        <div>
          search
          <input type="text" onInput={(e) => searchCity(e)} />{" "}
        </div>
        <br />
        <City id={cityId} city={cityName} />
        <div></div>
      </div>

      <div style={{ width: "30%", float: "right" }}>
        {cities?.map((item) => {
          return (
            <button
              key={item.Key}
              value={item.Key}
              onClick={(e) => selectCity(e)}
            >
              {item.LocalizedName}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
