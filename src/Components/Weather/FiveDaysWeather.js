import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
  Text,
} from "recharts";
import _ from "lodash";

export default function FiveDaysWeather({ data, unit }) {
  //return null if no data
  if (data && Object.keys(data).length === 0 && data.constructor === Object) {
    return null;
  }

  const weather = data.list;
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
      //and the next day weather till the current time
      //today + 86400 means the next day (24 hours == 86400 sec)
      moment
        .unix(timeUTC + timeZone)
        .utc()
        .format("YYYY-MM-DD") ===
        moment.unix(today).utc().format("YYYY-MM-DD") ||
      moment
        .unix(timeUTC + timeZone)
        .utc()
        .format("YYYY-MM-DD") ===
        moment
          .unix(today + 86400)
          .utc()
          .format("YYYY-MM-DD")
    )
      todayForecast.push(weatherData);
  }

  //add to the chart
  let todayForecastChart = [];
  for (const entry of todayForecast) {
    //new obj storing less items
    const entryChart = {
      temp: entry.main.temp,
      feels_like: entry.main.feels_like,
      time: moment
        .unix(entry.dt + timeZone)
        .utc()
        .format("HH:mm"),
    };
    //push to the array
    todayForecastChart.push(entryChart);
  }

  //use lodash groupBy function to extract each date from the data
  const fiveDaysForecast3hrs = _.groupBy(weather, (entry) =>
    moment
      .unix(entry.dt + timeZone)
      .utc()
      .format("ddd")
  );

  //convert to key's (date) array
  const keys = Object.keys(fiveDaysForecast3hrs);

  //remove the first date (today's date)
  keys.shift();

  let fiveDaysForecast = [];

  keys.forEach((key, index) => {
    //loop thru the weather by hours and get the avg high and low
    let high = Number.MIN_VALUE;
    let low = Number.MAX_VALUE;
    //continue to loop thru the obj array
    fiveDaysForecast3hrs[key].forEach((entry, index) => {
      //find the high and low
      high = Math.max(entry.main.temp_max, high);
      low = Math.min(entry.main.temp_min, low);
    });
    //round the number
    high = Math.round(high);
    low = Math.round(low);
    //construct an obj containing the daily forecast
    const dailyForecast = {
      date: key,
      high: high,
      low: low,
    };
    //add to the array
    fiveDaysForecast.push(dailyForecast);
  });

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
        <div className="card-header lead">3-hour forecast:</div>
        <div className="card-body d-flex flex-column overflow-auto ">
          <ResponsiveContainer width="98%" height={300}>
            <LineChart data={todayForecastChart}>
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#8884d8"
                name="Temperature"
                des
              />
              <XAxis dataKey="time" />
              <YAxis
                width={40}
                label={() => {
                  return (
                    <Text
                      x={-35}
                      y={30}
                      dx={50}
                      dy={150}
                      offset={0}
                      angle={-90}
                    >
                      Temperature
                    </Text>
                  );
                }}
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>

          {/* map each weather to one entry */}
          {todayForecast.map((data) => (
            <div
              key={data.dt_txt}
              className="d-flex flex-row
              align-items-center"
            >
              <p className="h5 mb-0">
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

      {/* for 5 days forecast */}
      <div className="card mt-3">
        <div className="card-header lead">Next 5 days forecast:</div>
        <div className="card-body d-flex flex-column overflow-auto ">
          <ResponsiveContainer width="98%" height={300}>
            <LineChart data={fiveDaysForecast}>
              <Line
                type="monotone"
                dataKey="high"
                stroke="#8884d8"
                name="Expected high temperature"
                des
              />
              <XAxis dataKey="date" />
              <YAxis
                width={40}
                label={() => {
                  return (
                    <Text
                      x={-35}
                      y={30}
                      dx={50}
                      dy={150}
                      offset={0}
                      angle={-90}
                    >
                      Temperature
                    </Text>
                  );
                }}
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {fiveDaysForecast.map((data) => (
          <div
            key={data.date}
            className="d-flex flex-row
              align-items-center justify-content-center mx-2"
          >
            <p className="h5 mb-0">{data.date}:&nbsp;</p>
            {/* <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
              alt="weather condition"
            ></img> */}
            <span className="fw-light mb-0 fs-5">
              High:&nbsp;
              {Math.round(data.high)}°{displayTemp} - Low:&nbsp;
              {Math.round(data.low)}°{displayTemp}.
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
