import React, { useState, useEffect, useRef, useMemo } from "react";
import { Container, Button, Collapse, Fade } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getWeatherData, getWeatherDataByCity } from "./Components/apis";
import { CitySearch } from "./Components/CitySearch";
import Weather from "./Components/Weather";
import ErrorInfo from "./Components/ErrorInfo";


function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState({});
  const [time, setTime] = useState(new Date().getHours());
  //state for show/hide the weather component
  const [openWeather, setOpenWeather] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  //state for the error we catch
  const [error, setError] = useState("");
  //unit, metric by default
  const [unit, setUnit] = useState("metric");

  //useRef to get the current elem (obj)
  //use ref forwarding
  const elemRef = useRef({});
  
  useEffect(() => {
    //get the current time
    setTime(new Date().getHours());
  }, [time])

  //this effect will be used every time the city or country changes
  useEffect(() =>{
    //only call the api when the user enter a city
    if (city !== "") {
      if (country === "") {
        //call the api and get the current weather
        getWeatherDataByCity(city, unit).then((res) => {
          setWeather(res.data);
        });
      }
      else {
        //call the api using city and country
        getWeatherData(city, country, unit).then((res) => {
          setWeather(res.data);
        });
      }
    }
  }, [city, country, unit])

  //display the part of day according to the current time
  let partOfDay;
  if (time < 12) partOfDay = "morning";
  else if (time < 18) partOfDay = "afternoon";
  else partOfDay = "evening";

  //handle the search btn on click
  const handleSearchOnClick = () => {
    //first set the city (and country)
    setCity(elemRef.current["cityName"].value);
    setCountry(elemRef.current["countryName"].value);

    if(city === "") {
      //show the alert
      setShowAlert(!showAlert);
      //for debugging only
      // setOpenWeather(!openWeather);
    }
    else {  
      //else show the weather based on the city passed
      //based on the value of the input field
      setShowAlert(false);
      setOpenWeather(!openWeather);
    }
  }

  console.log("city " + city + " country " + country)

  //close alert
  const handleClose = () => {
    setShowAlert(!showAlert);
  }

  console.log("weather: " , weather);

  return (
    <Container fluid>
      <div className="d-flex justify-content-center align-items-center
       flex-column vh-100">
        <p className="display-5 text-center">
          Good { partOfDay }! Welcome to my weather app.</p>
        <CitySearch city={city} 
          //pass this function down
          handleSearchOnClick={ handleSearchOnClick }
          //pass the ref down so we can access the field in the form
          ref={ elemRef }
        />
        {/* <Collapse in={ showAlert } > */}
          {/* <div id="alert"> */}
            <ErrorInfo showAlert={ showAlert } handleClose={ handleClose }/>
          {/* </div> */}
        {/* </Collapse> */}
        <Collapse in={ openWeather }>
          <div id="weather">
            <Weather data={ weather } city={city} unit={unit}/>
          </div>
        </Collapse>
      </div>
    </Container>
  )
}

export default App;
