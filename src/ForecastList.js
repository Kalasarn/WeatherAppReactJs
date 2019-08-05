import React, { Fragment } from "react";
import Forecast from "./Forecast";

function ForecastList(props) {
  let forecast = [];
  if (props.forecast.length > 0) {
    props.forecast.forEach(day => {
      if (day.dt_txt.endsWith("15:00:00")) forecast.push(day);
    });
    
  }

  return (
    <Fragment>
      {forecast.map(day => (
        <Forecast key={day.dt} forecast={day} />
      ))}
    </Fragment>
  );
}

export default ForecastList;
