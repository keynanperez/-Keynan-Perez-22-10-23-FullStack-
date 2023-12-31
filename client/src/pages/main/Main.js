import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import City from "../../components/City";


function Main() {
  const [cityId, setCityId] = useState("");
  const [cityName, setCityName] = useState("");
  const [cities, setCities] = useState();
  const api ="http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=E05a8Q5FHipXGoUQWH0R90KsEFw4z7AA&q=";

  const searchCity = async (e) => {
    const ct = await axios.get(api + e.target.value);
    setCities(ct.data);
    console.log(cities);
  };

  const selectCity = (e, key) => {
    setCityName(e.target.innerText);
    setCityId(key);
  };
  return (
    <div  class="columns">>
      <div  class="column" >
        <div>
          search
          <input type="text" onInput={(e) => searchCity(e)} />{" "}
        </div>
        <br />
        <City id={cityId} city={cityName} />
        <div></div>
      </div>

      <div class="column">
        {cities?.map((item) => {
          return (
            <div onClick={(e) => selectCity(e, item.Key)}>{item.LocalizedName}<br/></div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
