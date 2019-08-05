import React, { useState } from "react";

function Form(props) {
  const [citySearch, setCitySearch] = useState("");

  function handleCity(e) {
    setCitySearch(e.target.value);
  }

  function searhForCity() {
    props.getcity.bind(this, citySearch)();
    setCitySearch("");
  }
  return (
    <div className="inputDiv">
      <input
        type="text"
        value={citySearch}
        className="cityInput"
        onChange={handleCity}
        placeholder="Search for city"
      />
      <button className="findCityBtn" onClick={searhForCity}>
        Fetch City
      </button>
    </div>
  );
}

export default Form;
