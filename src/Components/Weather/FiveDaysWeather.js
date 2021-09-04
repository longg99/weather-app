import React from "react";
import Moment from "react-moment";
import "moment-timezone";

export default function FiveDaysWeather({ data, unit }) {
  //return null if no data
  if (data && Object.keys(data).length === 0 && data.constructor === Object) {
    return null;
  }

  const weather = data.list;
  console.log("weather: ", weather);
  //get the city
  const cityName = data.city.name;
  //get the data about the country
  const country = data.city.country;
  //about the time zone
  const timeZone = data.city.timezone;

  //get the time in unix, convert it to local time using the timezone in the api
  const today = (new Date().getTime() + timeZone * 1000) / 1000;
  return (
    <div>
      {/* display the local time */}
      <p className="lead mb-0 text-center" style={{ fontSize: "2vh" }}>
        This is the five days forecast of {cityName}, {country} as of&nbsp;
        <Moment unix format="LLL" tz="UTC">
          {today}
        </Moment>{" "}
        (local time):
      </p>
    </div>
  );
}
