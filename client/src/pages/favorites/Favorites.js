import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [cityName, setCityName] = useState("");
  const [cityId, setCityId] = useState("");
  const api ='http://localhost:3000/weather'

  useEffect(() => {
    const getFav = async () => {
      const fav = await axios.get(api);
      setFavorites(fav);
      console.log(favorites);
    };
    getFav()
  }, []);


  const selectFav = (e) => {
    //alert(e.target.value)
    setCityName(e.target.innerText);
    console.log(e);

    setCityId(e.target.value);
  };
  return (
    <div>
      <div style={{ width: "70%", float: "left" }}>
        my favorites
        <div></div>
      </div>

      <div style={{ width: "30%", float: "right" }}>
        {favorites?.map((item) => {
          return (
            <button
              key={item.Key}
              value={item.Key}
              onClick={(e) => selectFav(e)}
            >
              {item.LocalizedName}
            </button>
          );
        })}
      </div>
    </div>
  )
}

export default Favorites