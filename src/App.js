import React, { useState } from "react";
import "./App.css";
import ForecastList from "./ForecastList.js";
import Form from "./Form.js";
import sunny from "./sunny.png";
import drops from "./drops.png";
import snowflake from "./snowflake.png";
import clouds from "./clouds.png";

function App() {
  let [city, setCity] = useState({ name: "", temp: "", weather: "" });
  let [cityForecast, setCityForecast] = useState([]);
  let weather = "";

  async function fetchCity(citySearch) {
    let cityResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&APPID=6c9ad8ed1044871c8e95ef6290d26b9a`
    );
    let cityForecastResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&APPID=6c9ad8ed1044871c8e95ef6290d26b9a`
    );

    if (cityResponse.ok === true) {
      let foundCity = await cityResponse.json();
      let foundCityForecast = await cityForecastResponse.json();
      console.log(foundCity);
      console.log(foundCityForecast);
      let tempobj = {
        name: foundCity.name,
        temp: Math.round(foundCity.main.temp - 273.15) + " *",
        weather: foundCity.weather[0].main
      };
      setCity(tempobj);
      setCityForecast(foundCityForecast.list);
    } else {
      alert(`No city named ${citySearch}`);
    }
  }

  if (city.weather === "Clear") weather = sunny;
  if (city.weather === "Rain") weather = drops;
  if (city.weather === "Snow") weather = snowflake;
  if (city.weather === "Mist") weather = clouds;
  if (city.weather === "Clouds") weather = clouds;

  return (
    <div className="mainGrid">
      <div className="mainWindow">
        <div className="cityInfo">{city.name}</div>
        <div className="cityInfo">
          <img className="cityWeatherImage" src={weather} alt="" />
        </div>
        <div className="cityInfo">{city.temp}</div>
      </div>

      <ForecastList forecast={cityForecast} />
      <div className="clr" />
      <Form getcity={fetchCity} />
    </div>
  );
}

export default App;
