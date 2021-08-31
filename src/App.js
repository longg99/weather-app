import React, { useState, useEffect } from "react";
import { Container, Collapse, Fade } from "react-bootstrap";
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
  //refresh the weather
  const [refresh, setRefresh] = useState(false);
  
  useEffect(() => {
    //get the current time
    setTime(new Date().getHours());
  }, [time])

  //this effect will be used every time the city or country or unit changes
  useEffect(() => {
    //only call the api when the user enter a city
    if (city !== "" || refresh) {
      if (country === "") {
        //call the api and get the current weather
        getWeatherDataByCity(city, unit).then((res) => {
          console.log("calling the api with only city");
          setWeather(res.data);
          //reset the error 
          setError("");
        })
        //catch error
        .catch(function (error) {
          //if we got error and respond
          if (error.response) {
            //set the error message accordingly
            if (error.response.data.cod === "404") {
              setError("Please enter a valid city/country!");
            }
            else if (error.response.data.cod === "429") {
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
          console.log("calling the api with city and country");
          setWeather(res.data);
          //reset the error
          setError("");
        })
        //catch error
        .catch(function (error) {
          //if we got error
          if (error.response) {
            //set the error message accordingly
            if (error.response.data.cod === "404") {
              setError("Please enter a valid city/country!");
            }
            else if (error.response.data.cod === "429") {
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
    return () => setRefresh(false);
  }, [city, country, unit, refresh])

  //this effect will update page base onthe error and hide/show the weather section
  useEffect(() => {
    if (error !== "") {
      setShowAlert(true);
      setOpenWeather(false);
    }
    else {
      setShowAlert(false);
      //if we have city only show the weather
      if (city !== "") setOpenWeather(true);
    }
  }, [error, city])

  //handle the 401 since we cannot catch using the .catch
  //using a 401 response interceptor
  axios.interceptors.response.use(response => {
    return response;
  }, function (error) {
    if ("401" === error.response.status) {
        setError("Sorry! API key error. Please try again later.");
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
    //check if we have an error
    if(error === "" && city !== "") {
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
    setShowAlert(!showAlert);
  }

  const handleUnitOnChange = (e) => {
    setUnit(e.target.value);
  }

  //handle the refresh btn
  const handleRefresh = () => {
    //set the state to call the api
    setRefresh(true);
    console.log("refreshing the data");
  }

  //for debugging only
  console.log("weather: " , weather);
  console.log("unit: ", unit);
  console.log("error", error);
  console.log("refresh", refresh);//

  return (
    <Container fluid className="h-100">
      <div className="d-flex justify-content-center align-items-center
       flex-column h-100">
        <p className="display-5 text-center">
          Good { partOfDay }! Welcome to my weather app.</p>
        <CitySearch 
          //pass these functions and props down
          handleSearchOnClick={ handleSearchOnClick }
          handleCityChange = { handleCityChange }
          handleCountryChange = { handleCountryChange }
          handleUnitOnChange = { handleUnitOnChange }
          openWeather={ openWeather }
          showAlert={ showAlert }
          unit = { unit }
        />
        <Fade in={ showAlert } >
          <div id="alert">
            <ErrorInfo showAlert={ showAlert } handleClose={ handleClose }
              error = { error }/>
          </div>
        </Fade>
        <Collapse in={ openWeather }>
          <div id="weather" className="overflow-auto">
            <Weather data={ weather } unit={unit}
            handleRefresh = { handleRefresh }
            />
          </div>
        </Collapse>        
      </div>
    </Container>
  )
}

export default App;
