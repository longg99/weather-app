import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Collapse, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getWeatherData, getWeatherDataByCity } from "./Components/apis";
import CitySearch from "./Components/CitySearch";
import Weather from "./Components/Weather";


function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState({});
  const [time, setTime] = useState(new Date().getHours());
  //state for show/hide the weather component
  const [open, setOpen] = useState(false);

  //useRef to get the current elem (obj)
  const elemRef = useRef({});
  
  useEffect(() => {
    //get the current time
    setTime(new Date().getHours());
  }, [time])

  //this effect will be used every time the city or country changes
  useEffect(() =>{
    if (country == "") {
      //call the api and get the current weather
      getWeatherDataByCity(city).then((res) => {
        console.log(res.data);
        // setWeather(res.data);
      });
    }
    else {
      //call the api using city and country
      getWeatherData(city, country).then((res) => {
        console.log(res.data);
        // setWeather(res.data);
      });
    }
  }, [city, country])

  console.log(weather);

  //display the part of day according to the current time
  let partOfDay;
  if (time < 12) partOfDay = "morning";
  else if (time < 18) partOfDay = "afternoon";
  else partOfDay = "evening";

  //handle the search btn on click
  const handleSearchOnClick = () => {
    if(city === "") {
      // alert("City name is required!")
      return (
        <div class="alert alert-primary alert-dismissible" role="alert" id="liveAlert">
  <strong>Nice!</strong> You've triggered this alert.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      )
    }
    else {  
      setOpen(!open);
    }
  }

  return (
    <Container fluid>
      <div className="d-flex justify-content-center align-items-center
       flex-column vh-100">
        <p className="display-5 text-center">
          Good { partOfDay }! Welcome to my weather app.</p>
        <CitySearch city={city}/>
        <Button style={{marginTop: 10}} className="align-items-center" 
          onClick={handleSearchOnClick} 
          aria-expanded={open} aria-controls="weather" 
        >
          Show the current weather
        </Button>
        <Collapse in={open}>
          <div id="weather">
            <Weather data={weather} city={city} />
          </div>
        </Collapse>
      </div>
    </Container>
  )
}

export default App;
