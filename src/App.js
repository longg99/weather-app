import React, { useState, useEffect } from "react";
import { Collapse, Fade } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getWeatherData,
  getWeatherDataByCity,
  get5daysWeatherData,
  get5daysWeatherByCity,
  getWeatherDataCurrLocation,
  get5daysDataCurrLocation,
} from "./Components/apis";
import CitySearch from "./Components/CitySearch";
import Weather from "./Components/Weather";
import ErrorInfo from "./Components/ErrorInfo";
import axios from "axios";
import { HashRouter } from "react-router-dom";
import backgroundImg from "./img/background-img.jpg";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
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
  //current or forecast (5 days)
  const [report, setReport] = useState("current");
  //show/hide the hello text
  const [showInput, setShowInput] = useState(true);
  //the state storing the current location of the user
  //array of 2 elems stand for lat and lon
  //default is 0
  const [location, setLocation] = useState([0, 0]);
  //the user wants to use current location?
  const [useLocation, setUseLocation] = useState(false);
  //or use city search, true by default
  const [useCity, setUseCity] = useState(true);

  useEffect(() => {
    //get the current time
    setTime(new Date().getHours());
  }, [time]);

  //this effect will be used every time the city or country or unit changes
  useEffect(() => {
    //only call the api when the user enter a city
    if (useCity) {
      setUseLocation(false);
      if (city !== "" || refresh) {
        //don't use location anymore

        //if user choose current weather, call the API to get the current weather
        if (report === "current") {
          if (country === "") {
            //call the api and get the current weather
            getWeatherDataByCity(city, unit)
              .then((res) => {
                console.log("calling the current weather api with only city");
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
                  } else if (error.response.data.cod === "429") {
                    setError(
                      "Sorry! The number of calls exceeded the server's allowance." +
                        " Please try again in a few minutes..."
                    );
                  }
                } else if (error.request) {
                  setError(
                    "Sorry! We are not receiving any request from the server." +
                      " Please try again in a few minutes..."
                  );
                }
              });
          } else {
            //call the api using city and country
            getWeatherData(city, country, unit)
              .then((res) => {
                console.log(
                  "calling the current weather api with city and country"
                );
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
                  } else if (error.response.data.cod === "429") {
                    setError(
                      "Sorry! The number of calls exceeded the server's allowance." +
                        " Please try again in a few minutes..."
                    );
                  }
                } else if (error.request) {
                  // The request was made but no response was received
                  console.log(error.request);
                } else if (error.request) {
                  setError(
                    "Sorry! We are not receiving any request from the server." +
                      " Please try again in a few minutes..."
                  );
                }
              });
          }
        }
        //else show the forecast using the forecast API
        else if (report === "five days") {
          if (country === "") {
            //call the api and get the forecast
            get5daysWeatherByCity(city, unit)
              .then((res) => {
                console.log("calling the FORECAST api with only city");
                setForecast(res.data);
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
                  } else if (error.response.data.cod === "429") {
                    setError(
                      "Sorry! The number of calls exceeded the server's allowance." +
                        " Please try again in a few minutes..."
                    );
                  }
                } else if (error.request) {
                  setError(
                    "Sorry! We are not receiving any request from the server." +
                      " Please try again in a few minutes..."
                  );
                }
              });
          } else {
            //call the forecast api using city and country
            get5daysWeatherData(city, country, unit)
              .then((res) => {
                console.log(
                  "calling the FORECAST weather api with city and country"
                );
                setForecast(res.data);
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
                  } else if (error.response.data.cod === "429") {
                    setError(
                      "Sorry! The number of calls exceeded the server's allowance." +
                        " Please try again in a few minutes..."
                    );
                  }
                } else if (error.request) {
                  // The request was made but no response was received
                  console.log(error.request);
                } else if (error.request) {
                  setError(
                    "Sorry! We are not receiving any request from the server." +
                      " Please try again in a few minutes..."
                  );
                }
              });
          }
        }
      }
    }
    return () => setRefresh(false);
  }, [city, useCity, country, unit, refresh, report]);

  //effect when the user want to use their current location
  useEffect(() => {
    if (useLocation) {
      setUseCity(false);
      setCity("");
      //if we have location data, lat and lon
      if ((location[0] !== 0 && location[1] !== 0) || refresh) {
        if (report === "current") {
          getWeatherDataCurrLocation(location[0], location[1], unit)
            .then((res) => {
              console.log(
                "calling the current weather api with current location (lat:" +
                  location[0],
                ",long:" + location[1]
              );
              setWeather(res.data);
              //reset the error
              setError("");
              //open the weather
              setOpenWeather(true);
              setShowAlert(false);
            }) //catch error
            .catch(function (error) {
              //if we got error and respond
              if (error.response) {
                //set the error message accordingly
                if (error.response.data.cod === "404") {
                  setError("Please enter a valid city/country!");
                } else if (error.response.data.cod === "429") {
                  setError(
                    "Sorry! The number of calls exceeded the server's allowance." +
                      " Please try again in a few minutes..."
                  );
                }
              } else if (error.request) {
                setError(
                  "Sorry! We are not receiving any request from the server." +
                    " Please try again in a few minutes..."
                );
              }
            });
        } else if (report === "five days") {
          get5daysDataCurrLocation(location[0], location[1], unit)
            .then((res) => {
              console.log(
                "calling the current FORECAST api with current location (lat:" +
                  location[0],
                ",long:" + location[1]
              );
              setForecast(res.data);
              //reset the error
              setError("");
              setOpenWeather(true);
              setShowAlert(false);
            }) //catch error
            .catch(function (error) {
              //if we got error and respond
              if (error.response) {
                //set the error message accordingly
                if (error.response.data.cod === "404") {
                  setError("Please enter a valid city/country!");
                } else if (error.response.data.cod === "429") {
                  setError(
                    "Sorry! The number of calls exceeded the server's allowance." +
                      " Please try again in a few minutes..."
                  );
                }
              } else if (error.request) {
                setError(
                  "Sorry! We are not receiving any request from the server." +
                    " Please try again in a few minutes..."
                );
              }
            });
        }
      }
    }
    return () => {
      setRefresh(false);
    };
  }, [useLocation, location, refresh, report, unit]);

  //this effect will update page base onthe error and hide/show the weather section
  useEffect(() => {
    if (error !== "") {
      setShowAlert(true);
      setOpenWeather(false);
    } else {
      setShowAlert(false);
      //if we have city or the weather data only show the weather
      if (city !== "") setOpenWeather(true);
    }
  }, [error, city]);

  //every time the weather is open, hide the input section
  useEffect(() => {
    if (openWeather)
      //hide the input section so the user have more space
      setShowInput(false);
    else setShowInput(true);
  }, [openWeather]);

  //handle the 401 since we cannot catch using the .catch
  //using a 401 response interceptor
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if ("401" === error.response.status) {
        setError(
          "Sorry! API key error. Please try again with another API key."
        );
      } else {
        return Promise.reject(error);
      }
    }
  );

  //display the part of day according to the current time
  let partOfDay;
  if (time < 12 && time > 4) partOfDay = "morning";
  else if (time < 18 && time > 12) partOfDay = "afternoon";
  else partOfDay = "evening";

  //handle the search btn on click
  const handleSearchOnClick = () => {
    //check if we have an error
    if ((error === "" && city !== "") || useLocation) {
      //show the weather based on the city passed
      //based on the value of the input field
      setShowAlert(false);
      setOpenWeather(!openWeather);
    } else {
      //else
      //set the error if city is not given and the user does not use location
      if (!useLocation && city === "") setError("You must enter a city first!");
      //show the alert
      setShowAlert(!showAlert);
    }
  };

  //handle city change
  const handleCityChange = (newCity) => {
    //set the new city
    setCity(newCity);
    if (city !== "") setUseCity(true);
  };

  //handle country change
  const handleCountryChange = (newCountry) => {
    //set the new country
    setCountry(newCountry);
  };

  //close alert
  const handleClose = () => {
    setShowAlert(!showAlert);
  };

  const handleUnitOnChange = (e) => {
    setUnit(e.target.value);
  };

  //handle the refresh btn
  const handleRefresh = () => {
    //set the state to call the api
    setRefresh(true);
  };

  const handleChangeReport = (val) => {
    //set the report to 5 days or current
    setReport(val);
  };

  //this function is to set the location
  const setPosition = (position) => {
    //set the location (lat and long) in the state of the main app
    setLocation([position.coords.latitude, position.coords.longitude]);
  };

  const handleGetLocation = () => {
    //use the geolocation API to return the user's position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition);
      setUseLocation(true);
    } else {
      setError(
        "Sorry! We couldn't get your geolocation. Either your browser does not support it or you did not give the permission. Please try again."
      );
      setShowAlert(true);
    }
  };

  return (
    <HashRouter basename="/">
      <div
        className="d-flex justify-content-center align-items-center
       flex-column h-100"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        {/* display if weather is not shown */}
        <p className={showInput ? "display-6 text-center w-100" : "d-none"}>
          Good {partOfDay}! Welcome to my weather app.
        </p>
        <CitySearch
          //pass these functions and props down
          handleSearchOnClick={handleSearchOnClick}
          handleCityChange={handleCityChange}
          handleCountryChange={handleCountryChange}
          handleUnitOnChange={handleUnitOnChange}
          handleGetLocation={handleGetLocation}
          openWeather={openWeather}
          showAlert={showAlert}
          unit={unit}
          useCity={useCity}
        />
        <Fade in={showAlert} unmountOnExit={true}>
          <div id="alert">
            <ErrorInfo
              showAlert={showAlert}
              handleClose={handleClose}
              error={error}
            />
          </div>
        </Fade>
        <Collapse in={openWeather} unmountOnExit={true}>
          <div id="weather" className="overflow-auto m-0 p-0">
            <Weather
              weather={weather}
              unit={unit}
              forecast={forecast}
              handleRefresh={handleRefresh}
              handleChangeReport={handleChangeReport}
            />
          </div>
        </Collapse>
      </div>
    </HashRouter>
  );
}

export default App;
