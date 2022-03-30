import { useState, useEffect } from "react";
import Conditions from "./conditions";

function Weather() {
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial");
  let [responseObj, setResponseObj] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState([]);

  function getForecast(e) {
    e.preventDefault();
    fetch("/api/weather")
      .then((response) => response.json())
      .then((json) => {
        setResponseObj(json);
        console.log(json);
      })
      .catch((err) => console.error(`Error: ${err}`));
  }

  return (
    <div className="container">
      <h2>Find Current Weather Conditions</h2>
      <button onClick={getForecast}>Get Forecast</button>
      {/* <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <button className={Button} type="submit">Get Forecast</button>
            </form> */}
      <Conditions responseObj={responseObj} />
    </div>
  );
}

export default Weather;
