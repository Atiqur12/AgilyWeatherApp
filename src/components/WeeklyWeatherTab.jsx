import React, { memo } from "react";
import { Link } from "react-router-dom";
import { months, days, dateHandler } from "../constants/Constants";

function WeeklyWeatherTab(props) {
  const { weatherData, handleChange, index } = props;

  return (
    <>
      <li>
        <Link to="" onClick={() => handleChange(weatherData, index)}>
          <div className="card">
            <div className="card__info">
              <div className="card__weather">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
                  alt="img"
                  className="card__weather__icon"
                />
                <div>
                  <p className="card__info__time">
                    {days[dateHandler(weatherData?.dt).getDay()]}
                  </p>
                  <p className="card__info__date">
                    {dateHandler(weatherData?.dt).getDate()}{" "}
                    {months[dateHandler(weatherData?.dt).getMonth()]}
                  </p>
                </div>
              </div>
            </div>
            <div className="card__weather">
              <p className="card__weather__temp">
                {Math.round(weatherData?.temp?.day)} °C
              </p>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default memo(WeeklyWeatherTab);
