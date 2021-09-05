import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment";

export default function FiveDaysWeather({ data, unit }) {
  //return null if no data
  if (data && Object.keys(data).length === 0 && data.constructor === Object) {
    return null;
  }

  const weather = data.list;
  console.log("weather data of forecast: ", weather);
  //get the city
  const cityName = data.city.name;
  //get the data about the country
  const country = data.city.country;
  //about the time zone
  const timeZone = data.city.timezone;

  //get the time in unix, convert it to local time using the timezone in the api
  const today = (new Date().getTime() + timeZone * 1000) / 1000;

  //unit is metric or imperial?
  const displayTemp = unit === "metric" ? "C" : "F";

  //capitalize the first letter in our returned weather cond
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  //today forecast
  let todayForecast = [];

  //get the today's weather
  //since we have a maximum of 8 data per day, we only need to loop
  //thru the first 8 elements to get the data
  for (let i = 0; i < 8; i++) {
    let weatherData = weather[i];
    let timeUTC = weatherData.dt;
    //if the weather date is today
    if (
      //convert to local time time (in const today) and compare
      //if we have the same data then it's the today's weather
      moment
        .unix(timeUTC + timeZone)
        .utc()
        .format("YYYY-MM-DD") === moment.unix(today).utc().format("YYYY-MM-DD")
    )
      todayForecast.push(weatherData);
  }

  console.log(
    moment
      .unix(weather[0].dt + timeZone)
      .utc()
      .format("YYYY-MM-DD HH:mm:ss")
  );
  console.log(moment.unix(weather[1].dt).utc().format("YYYY-MM-DD HH:mm:ss"));
  console.log(moment.unix(weather[2].dt).utc().format("YYYY-MM-DD HH:mm:ss"));
  console.log(moment.unix(weather[3].dt).utc().format("YYYY-MM-DD HH:mm:ss"));
  console.log(moment.utc().format("YYYY-MM-DD HH:mm:ss"));
  console.log(
    "local time to UTC: " +
      moment.unix(today).utc().format("YYYY-MM-DD HH:mm:ss")
  );
  console.log("unix to utc: ", moment().unix());
  console.log("date test: ", moment.unix(1630908000).format("YYYY-MM-DD"));
  console.log("forecast: ", todayForecast);

  return (
    <div>
      {/* display the local time */}
      <p className="lead mb-0 text-center mb-3" style={{ fontSize: "2vh" }}>
        This is the forecast of {cityName}, {country} as of&nbsp;
        <Moment unix format="LLL" tz="UTC">
          {today}
        </Moment>{" "}
        (local time):
      </p>
      <div className="card">
        <div className="card-header lead">3-hour forecast for today:</div>
        <div className="card-body d-flex flex-column overflow-auto ">
          {/* map each weather to one entry */}
          {todayForecast.map((data) => (
            <div
              key={data.dt_txt}
              className="d-flex flex-row
              align-items-center"
            >
              <p className="h5 fst-italic mb-0">
                <Moment unix format="HH:mm" tz="UTC">
                  {/* convert to local timezone */}
                  {data.dt + timeZone}
                </Moment>
                :
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="weather condition"
              ></img>
              <p className="fw-light fs-5 mb-0">
                {Math.round(data.main.temp)}°{displayTemp} -{" "}
                {capitalizeFirstLetter(data.weather[0].description)}. Feels
                like: {Math.round(data.main.feels_like)}°{displayTemp}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
