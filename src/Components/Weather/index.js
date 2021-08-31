import React from 'react'
import { Container, Button } from 'react-bootstrap';
import Moment from "react-moment";
import 'moment-timezone';

export default function Weather({ data, unit, handleRefresh }) {
    if (data && Object.keys(data).length === 0 && data.constructor === Object) {
        return null;
    }
    //get the weather description and icon
    const weather = data.weather[0];
    //get the main weather from the data we passed
    const mainWeather = data.main;
    //get the data about the country
    const countryData = data.sys;
    //get the city name
    const cityName = data.name;
    //about the wind
    const wind = data.wind;
    //about the time zone
    const timeZone = data.timezone;
    //about the sunrise and sunset and convert to UTC
    const sunrise = data.sys.sunrise + timeZone;
    const sunset = data.sys.sunset + timeZone;

    //get the url of the icon
    const imgUrl = `http://openweathermap.org/img/wn/${weather.icon}.png`

    //unit is metric or imperial?
    const displayTemp = unit === "metric" ? "C" : "F";
    const displaySpeed = unit === "metric" ? "m/s (meter/sec)" : "mph (miles per hour)";

    //get the time in unix, convert it to local time using the timezone in the api
    const today = (new Date().getTime() + (timeZone * 1000)) / 1000;

    //capitalize the first letter in our returned weather cond
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <Container fluid className="justify-content-center border bg-light">
            <p className="lead mb-0 text-center" style={{ fontSize: "2vh" }}>
                This is the current weather of {cityName}, {countryData.country} as of&nbsp;
                <Moment unix format="LLL" tz="UTC">{today}</Moment> (local time):

            </p>
            <div className="d-flex flex-row align-items-center 
                    justify-content-center">
                <img src={imgUrl} alt="weather condition"></img>
                <p className="h2 mb-0">
                    {Math.round(mainWeather.temp)}
                    °{displayTemp} - {capitalizeFirstLetter(weather.description)}
                </p>
            </div>
            <p className="text-center fs-5">
                {capitalizeFirstLetter(weather.description)} condition is forecasted for now. 
            </p>
            <div className="d-flex flex-column align-items-left 
                    justify-content-left">
                <p className="lead text-uppercase fst-italic">Detailed weather report: </p>
                <div id="weatherInfo">
                    <span className="text-muted">High: </span>
                    <span>{Math.round(mainWeather.temp_max)}°{displayTemp}.</span>
                    <br />
                    <span className="text-muted">Low: </span>
                    <span>{Math.round(mainWeather.temp_min)}°{displayTemp}.</span>
                    <br />
                    <span className="text-muted">Feels like: </span>
                    <span>{Math.round(mainWeather.feels_like)}°{displayTemp}.</span>
                    <br />
                    <span className="text-muted">Humidity: </span>
                    <span>{Math.round(mainWeather.humidity)}%.</span>
                    <br />                   
                    <span className="text-muted">Atmospheric pressure: </span>
                    <span>{Math.round(mainWeather.pressure)} hPa.</span>
                    <hr />
                    <span className="text-muted">Wind speed: </span>
                    <span>{wind.speed} {displaySpeed}.</span>
                    <br />
                    <span className="text-muted">Wind gust: </span>
                    <span>{wind.gust} {displaySpeed}.</span>
                    <hr />
                    <span className="text-muted">Cloudiness: </span>
                    <span>{data.clouds.all}%.</span>
                    <br />
                    <span className="text-muted">Visibility: </span>
                    <span>{data.visibility / 1000} km</span>
                    <hr />
                    <span className="text-muted">Sunrise: </span>
                    <span><Moment unix format="LT" tz="UTC">{sunrise}</Moment></span>
                    <br />
                    <span className="text-muted">Sunset: </span>
                    <span><Moment unix format="LT" tz="UTC">{sunset}</Moment></span>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center 
                    justify-content-center">
                <Button style={{marginTop: 10}}  
                    className="mb-2" onClick={ handleRefresh }
                >
                Refresh
                </Button>
            </div>
        </Container>
    )
}
