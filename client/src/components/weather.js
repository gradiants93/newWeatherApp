import { useState, useEffect } from "react";
import Form from "./form";
const apiKey = `1a38ab5a80fac5388f148d569c1f0992`;
var city = 'seattle';
const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

function Weather() {
  let [city, setCity] = useState('');
  let [unit, setUnit] = useState('imperial');
  let [responseObj, setResponseObj] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState([]);

  function getForecast(e) {
    e.preventDefault();
    
    fetch(URL)
    .then(response => response.json())
    .then(json => {
      setResponseObj(json);
      console.log(json)
    })
    .catch(err => console.error(`Error: ${err}`));
  }
  // async function renderWeather() {
  //   let weatherReport = await getWeather();
  //   let html = "<ul>";
  //   weatherReport.forEach((day) => {
  //   let htmlText = day.temp;
  //   let htmlSegment = `<li>${htmlText}</li>`;
  //   html += htmlSegment;
  //   });
  //   html += "</ul>";
  //   let container = document.querySelector(".container");
  //   container.innerHTML = html;
  // }
  // renderWeather();


  return (
    <div className="container">
      <h2>Find Current Weather Conditions</h2>
      <div>{JSON.stringify(responseObj)}</div>
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
            </form>
            <Conditions
               responseObj={responseObj}
               error={error}
               loading={loading}
               /> */}
    </div>
  );
}

export default Weather;
