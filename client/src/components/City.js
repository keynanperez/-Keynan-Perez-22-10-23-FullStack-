import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './city.css';


function City(props) {
  const [cityWeather, setCityWeather] = useState();
  const fToC = (fahrenheit) => {
    var fTemp = fahrenheit;
    var fToCel = ((fTemp - 32) * 5) / 9;
    return parseInt(fToCel);
  };
  const api = "https://dataservice.accuweather.com/forecasts/v1/daily/1day/";
  const apiPost = "http://localhost:3000/favorites/";
  const apiKey='?apikey=E05a8Q5FHipXGoUQWH0R90KsEFw4z7AA&q'
  useEffect(() => {
    const getCityData = async () => {
      console.log(props.id);
      const ct = await axios.get(api+props.id+apiKey);
      setCityWeather(ct.data.DailyForecasts[0]);
      console.log(cityWeather);
    };
    getCityData();
  }, [props.id]);

  const addToFavorite = async (e) => {
    e.preventDefault();

    let obj = {
      id: props.id,
      city: cityWeather?.Day.LocalSource?.Name,
      icon_phrase: cityWeather?.Day?.IconPhrase,
      temp: fToC(cityWeather?.Temperature?.Maximum.Value),
    };
    console.log(obj);

    const favPost = await axios.post(apiPost, obj);
    console.log(favPost);
  };

  return (
    cityWeather && (
      <div className="city-card" >
        {props.city} <br /> {cityWeather?.Day.IconPhrase}
        <br />
        {fToC(cityWeather?.Temperature?.Maximum?.Value)}
        <br />
        <button className="btn1" onClick={(e) => addToFavorite(e)}>Add To Favorite</button>
        <br />
      </div>
    )
  );
}

export default City;
