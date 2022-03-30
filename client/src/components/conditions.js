import React from "react";
const Conditions = ({ responseObj, setForecast }) => {
  //   let fullForecast = responseObj;
  //   console.log(fullForecast);
  return (
    <div>
      {responseObj.cod == 200 ? (
        <div>
          <p>
            <strong>{responseObj.name}</strong>
          </p>
          {/* {fullForecast.list.map((day) => {
            if (day.dt_txt.split(" ")[1] === "12:00:00") {
              console.log(day.dt_txt.split(" ")[1], day.main.temp);
              setForecast( */}
          <p>
            It is currently {Math.round(responseObj.main.temp)} degrees
            Fahrenheit with {responseObj.weather[0].description}.
          </p>
          {/* ); } })} */}
        </div>
      ) : (
        "Input a city"
      )}
    </div>
  );
};
export default Conditions;
