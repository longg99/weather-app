import Axios from "axios";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const getWeatherData = (city, country, unit) =>
  Axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${unit}&appid=${API_KEY}`
  );

export const getWeatherDataByCity = (city, unit) =>
  Axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
  );

export const get5daysWeatherByCity = (city, unit) =>
  Axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
  );

export const get5daysWeatherData = (city, country, unit) =>
  Axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=${unit}&appid=${API_KEY}`
  );
