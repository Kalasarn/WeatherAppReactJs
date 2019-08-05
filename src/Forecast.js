import React from "react";
import sunny from "./sunny.png";
import drops from "./drops.png";
import snowflake from "./snowflake.png";
import clouds from "./clouds.png";

function Forecast(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mars",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];
  let daytime = props.forecast.dt_txt.split(" ");
  let day = days[new Date(daytime[0]).getDay()];
  let month = months[new Date(daytime[0]).getMonth()];
  let dayofmonth = new Date(daytime[0]).getDate().toString();
  let date = month + " " + dayofmonth;

  let weather;

  if (props.forecast.weather[0].main === "Clear") weather = sunny;
  if (props.forecast.weather[0].main === "Rain") weather = drops;
  if (props.forecast.weather[0].main === "Snow") weather = snowflake;
  if (props.forecast.weather[0].main === "Clouds") weather = clouds;
  if (props.forecast.weather[0].main === "Mist") weather = clouds;

  return (
    <div className="forecastGrid">
      <div className="forecastItemDay">
        {day}
        <br />
        <div className="forecastItemDate">{date}</div>
      </div>
      <div className="forecastItemWeather">
        <img className="weatherImage" src={weather} alt="" />
      </div>
      <div className="forecastItemInfo">
        {Math.round(props.forecast.main.temp - 273.15)} *
      </div>
    </div>
  );
}

export default Forecast;
