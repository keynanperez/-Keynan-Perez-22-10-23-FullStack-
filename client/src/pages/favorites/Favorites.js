import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


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
  }, [favCity]);

  const selectFavorite = (x) => {
    setFavCity(x);
  };

  const delFromFavorite = async (id) => {
    const favoriteDelete = await axios.delete(api+id);
    setFavCity("")
  };
  return (
    <div  class="columns">
          <div class="column">
        {favCity && (
          <div class="box" >
            {favCity.city} <br /> {favCity.icon_phrase}
            <br />
            {favCity.temp}
            <br />
            <button onClick={() => delFromFavorite(favCity.id)}>
              delete from Favorites
            </button>
            <br />
          </div>
        )}{" "}
        <div></div>
      </div>

      <div class="column" >
        {favorites?.map((item) => {
          return (
            <div  key={item.id} value={item.id} onClick={(e) => selectFavorite(item)} >
              {item.city}
              
            </div>
            
          );
        })}
      </div>
      
    </div>
  );
}

export default Favorites;
