import React from 'react'
import { Container } from 'react-bootstrap';

export default function Weather({ data, city, unit }) {
    console.log(data);
    if (data && Object.keys(data).length === 0 && data.constructor === Object) {
        return null;
    }
    //get the weather description and icon
    const weather = data.weather[0];
    //get the main weather from the data we passed
    const mainWeather = data.main;
    //get the url of the icon
    const imgUrl = `http://openweathermap.org/img/wn/${weather.icon}.png`

    //unit is metric or imperial?
    const displayUnit = unit === "metric" ? "C" : "F";

    //display the time
    let today = new Date().toLocaleString();

    //capitalize the first letter in our returned weather cond
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <Container fluid className="justify-content-center border">
            <p className="lead mb-0 text-center" style={{ fontSize: "2vh" }}>
                This is the current weather of {city}:
            </p>
            <div className="d-flex flex-row align-items-center 
                    justify-content-left">
                <img src={imgUrl} alt="weather condition"></img>
                <p className="h2 mb-0">
                    {Math.round(mainWeather.temp)}
                    °{displayUnit} - {capitalizeFirstLetter(weather.description)}
                </p>
            </div>
            <div className="d-flex flex-column align-items-left 
                    justify-content-left">
                <p>Feels like:</p>
            </div>
            <p id="desc">{capitalizeFirstLetter(weather.description)} is forecasted
                as of {today}. 
            </p>

        </Container>
    )
}
