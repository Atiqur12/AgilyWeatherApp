import React, { memo } from "react";

import { months, days, dateHandler } from "../constants/Constants";

function TodayWeather(props) {
  const { weatherData } = props;

  return (
    <div className="detail_card">
      {weatherData && (
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
                  {days[dateHandler(weatherData?.dt).getDay()]}{" "}
                  {dateHandler(weatherData?.dt).getDate()}{" "}
                  {months[dateHandler(weatherData?.dt).getMonth()]}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <p>Day - {Math.round(weatherData?.temp?.day)} °C</p>
              </li>
              <li>
                <p>Night -{Math.round(weatherData?.temp?.night)} °C</p>
              </li>
              <li>
                <p>Humidity - {weatherData?.humidity}%</p>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <p>Pressure - {weatherData?.pressure}hPa</p>
              </li>
              <li>
                <p>Wind - {weatherData?.wind_speed} Km/h</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(TodayWeather);
