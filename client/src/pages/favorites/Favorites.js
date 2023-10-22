import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import './favorites.css';


function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [favCity, setFavCity] = useState("");
  const api = "http://localhost:3000/favorites/";

  useEffect(() => {
    const getFavorite = async () => {
      const fav = await axios.get(api);
      setFavorites(fav.data.data);
    };
    getFavorite();
  }, []);

  const selectFavorite = (x) => {
    setFavCity(x);
  };

  const delFromFavorite = async (id) => {
    const favoriteDelete = await axios.delete(api + id);
  };
  return (
    <div>
      <div className="main-search" style={{ width: "70%", float: "left" }} >
        {favCity && (
          <div className="city-card" >
            {favCity.city} <br /> {favCity.icon_phrase}
            <br />
            {favCity.temp}
            <br />
            <button className="btn1" onClick={() => delFromFavorite(favCity.id)}>
              delete from Favorites
            </button>
            <br />
          </div>
        )}{" "}
        <div></div>
      </div>

      <div className="main-nav"style={{ width: "30%", float: "right" }}>
        {favorites?.map((item) => {
          return (
            <div key={item.id} value={item.id} onClick={(e) => selectFavorite(item)}>
              {item.city}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
