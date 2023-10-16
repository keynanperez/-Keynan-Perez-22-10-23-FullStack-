import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

function Main() {
  const [city, setCity] = useState("");
const api='http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=E05a8Q5FHipXGoUQWH0R90KsEFw4z7AA&q='
  const searchCity = (e) => {
    setCity(e.target.value);
    alert(city)

  }

  return (
    <div>
       <div style={{ width: "50%", float: "left" }}>

<div>
search
<input type="text" onInput={(e) => searchCity(e)} />{" "}

</div>
<div>
result
</div>
      </div>
      <div style={{ width: "50%", float: "right" }}>

        sidebar
        </div>
    </div>
  )
}

export default Main
