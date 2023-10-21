import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";


function City(props) {

    const [cityWeather,setCityWeather]=useState();

    const api ='https://dataservice.accuweather.com/forecasts/v1/daily/1day/'
    useEffect(() => {
        const getCityData = async () => {
            const ct = await axios.get(api+props.id+"?apikey=E05a8Q5FHipXGoUQWH0R90KsEFw4z7AA&q");
            setCityWeather(ct.data.DailyForecasts
[0]                );
            console.log(cityWeather);
          };
          getCityData()
    }, [props.id]);

    const addToFavorite = () => {

    }

  return (
    <div>{props.city}  {cityWeather?.Day.IconPhrase}<br/>
    <button onClick={addToFavorite()}>Add To Favorite
    </button><br />
</div>
  )
}

export default City