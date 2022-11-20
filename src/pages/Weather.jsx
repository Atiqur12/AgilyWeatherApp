import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getWeatherReport } from "../services/weather";

import Back from "../assets/images/back.png";
import BackgroundImage from "../assets/images/page1.jpeg";
import TodayWeather from "../components/TodayWeather";
import WeeklyWeatherTab from "../components/WeeklyWeatherTab";

function Weather() {
  const { lat, long } = useParams();
  const [currentWeather, setCurrentWeather] = useState("");
  const [dailyWeather, setDailyWeather] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const handleWeatherReport = async () => {
      try {
        const result = await getWeatherReport(lat, long);
        setDailyWeather(result);
        setCurrentWeather(result.daily[0]);
      } catch (err) {
        console.log(err);
      }
    };
    handleWeatherReport();
  }, [lat, long]);

  const handleChange = (data, index) => {
    if (index !== selected) {
      setSelected(index);
      setCurrentWeather(data);
    } else {
      setCurrentWeather(dailyWeather?.daily[0]);
    }
  };

  return (
    <div
      className="main_weapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="container">
        <div className="row pt-5">
          <div className="col-8">
            <div className="back_icon">
              <Link to="/">
                <img src={Back} alt="img" />
              </Link>
            </div>
            <div className="bottom_wether_detail">
              <TodayWeather weatherData={currentWeather} />
            </div>
          </div>
          <div className="col-4">
            <div className="weekly_wether">
              <ul>
                {dailyWeather?.daily &&
                  dailyWeather?.daily
                    .slice(1)
                    .map((wea, i) => (
                      <WeeklyWeatherTab
                        weatherData={wea}
                        key={i}
                        handleChange={handleChange}
                        index={i}
                      />
                    ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
