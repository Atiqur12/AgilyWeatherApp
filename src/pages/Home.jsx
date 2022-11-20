import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchByCity } from "../services/weather";

function Home() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && city.trim() !== "") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      const result = await searchByCity(city);
      if (result?.length)
        navigate(`weather/${result[0]?.lon}/${result[0]?.lat}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="search_wrapper">
      <div className="search_form">
        <h1>
          {" "}
          The Forcast <br />
          <span>Weather App</span>
        </h1>
        <div className="icon-input">
          <input
            className="icon-input__text-field"
            type="text"
            value={city}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
          <i className="icon-input__icon material-icons">search</i>
        </div>
      </div>
    </div>
  );
}

export default Home;
