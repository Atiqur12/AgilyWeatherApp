import axios from "axios";
import { appId } from "../constants/Constants";

const searchByCity = async (city) => {
  const result = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${appId}`
  );
  return result.data;
};

const getWeatherReport = async (lat, long) => {
  const result = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${appId}&units=metric`
  );
  return result.data;
};

export { searchByCity, getWeatherReport };
