import React, { useState, useEffect, useRef, useMemo } from "react";
import { Container, Button, Collapse, Fade } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getWeatherData, getWeatherDataByCity } from "./Components/apis";
import CitySearch from "./Components/CitySearch";
import Weather from "./Components/Weather";
import ErrorInfo from "./Components/ErrorInfo";
import axios from "axios";


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
  //change the submit btn text
  const [submitText, setSubmitText] = useState("Show me the weather");

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
          console.log("calling the api");
          setWeather(res.data);
          //reset the error
          setError({})
        })
        //catch error
        .catch(function (error) {
          //if we got error and respond
          if (error.response) {
            //set the error message accordingly
            if (error.response.data.cod == 404) {
              setError("Please enter a valid city/country!");
            }
            else if (error.response.data.cod == 429) {
              setError("Sorry! The number of calls exceeded the server's allowance." +
              " Please try again in a few minutes...");
            }
          } else if (error.request) {
              setError("Sorry! We are not receiving any request from the server." +
              " Please try again in a few minutes...");
          } 
        });
      }
      else {
        //call the api using city and country
        getWeatherData(city, country, unit).then((res) => {
          console.log("calling the api");
          setWeather(res.data);
        })
        //catch error
        .catch(function (error) {
          //if we got error
          if (error.response) {
            //set the error message accordingly
            if (error.response.data.cod == 404) {
              setError("Please enter a valid city/country!");
            }
            else if (error.response.data.cod == 429) {
              setError("Sorry! The number of calls exceeded the server's allowance." +
              " Please try again in a few minutes...");
            }
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else if (error.request) {
              setError("Sorry! We are not receiving any request from the server." +
              " Please try again in a few minutes...");
          }
        });
      };
    }
  }, [city, country, unit])

  //handle the 401 since we cannot catch using the .catch
  //using a 401 response interceptor
  axios.interceptors.response.use(response => {
    return response;
  }, function (error) {
    if (401 === error.response.status) {
        setError("Please enter a valid city/country!");
    } else {
        return Promise.reject(error);
    }
  });

  //display the part of day according to the current time
  let partOfDay;
  if (time < 12) partOfDay = "morning";
  else if (time < 18) partOfDay = "afternoon";
  else partOfDay = "evening";

  //handle the search btn on click
  const handleSearchOnClick = () => {
    //change to hide/show
    if (submitText === "Hide") {
      setSubmitText("Show me the weather");
    }
    else {
      setSubmitText("Hide");
    }
    //check if we have an error
    if(error && Object.keys(error).length === 0 && error.constructor === Object && 
      city !== "") {
      //show the weather based on the city passed
      //based on the value of the input field
      setShowAlert(false);
      setOpenWeather(!openWeather);
    }
    else {  
      //else
      //set the error
      if (city === "") setError("You must enter a city first!");
      //show the alert
      setShowAlert(!showAlert);
    }
  }

  //handle city change
  const handleCityChange = (newCity) => {
    //set the new country
    setCity(newCity);
  }

  //handle country change
  const handleCountryChange = (newCountry) => {
    //set the new country
    setCountry(newCountry);
  }

  //close alert
  const handleClose = () => {
    //change the submit btn text
    if (submitText === "Hide") {
      setSubmitText("Show me the weather");
    }
    else {
      setSubmitText("Hide");
    }
    setShowAlert(!showAlert);
  }

  console.log("weather: " , weather);

  return (
    <Container fluid>
      <div className="d-flex justify-content-center align-items-center
       flex-column vh-100">
        <p className="display-5 text-center">
          Good { partOfDay }! Welcome to my weather app.</p>
        <CitySearch 
          //pass this function down
          handleSearchOnClick={ handleSearchOnClick }
          handleCityChange = { handleCityChange }
          handleCountryChange = { handleCountryChange }
          //pass the ref down so we can access the field in the form
          submitText={ submitText }
        />
        <Collapse in={ showAlert } >
          <div id="alert">
            <ErrorInfo showAlert={ showAlert } handleClose={ handleClose }
              error = { error }/>
          </div>
        </Collapse>
        <Collapse in={ openWeather }>
          <div id="weather">
            <Weather data={ weather } unit={unit}/>
          </div>
        </Collapse>
      </div>
    </Container>
  )
}

export default App;
