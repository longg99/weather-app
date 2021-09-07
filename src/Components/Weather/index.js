import React, { useState, useEffect } from "react";
import { Container, Button, ListGroup } from "react-bootstrap";
import "moment-timezone";
import { Route, Switch, Link, Redirect, HashRouter } from "react-router-dom";
import CurrentWeather from "./CurrentWeather";
import FiveDaysWeather from "./FiveDaysWeather";

export default function Weather({
  weather,
  unit,
  handleRefresh,
  handleChangeReport,
  forecast,
}) {
  //state for which component is active
  //0 is for current weather, 1 is for 5 days forecast
  const [active, setActive] = useState(0);
  const [classNameCurr, setClassNameCurr] = useState();
  const [classNameFiveDays, setClassNameFiveDays] = useState();

  //check for which link is active, then change the text color using the class name
  useEffect(() => {
    if (active === 0) {
      //the first link is active, set the text to white the the other to black
      setClassNameCurr("text-light text-center col");
      setClassNameFiveDays("text-dark text-center col");
    } else {
      setClassNameCurr("text-dark text-center col");
      setClassNameFiveDays("text-light text-center col");
    }
  }, [active]);

  //return null if no weather
  if (
    weather &&
    Object.keys(weather).length === 0 &&
    weather.constructor === Object
  ) {
    return null;
  }

  return (
    <Container fluid className="justify-content-center border bg-light">
      {/* use a router to get different component */}
      <HashRouter>
        <ul className="row p-0">
          <ListGroup.Item
            as={Link}
            className={classNameCurr}
            to="/currentweather"
            active={active === 0 ? true : false}
            onClick={(e) => {
              setActive(0);
              handleChangeReport("current");
            }}
          >
            Current weather
          </ListGroup.Item>
          <ListGroup.Item
            as={Link}
            className={classNameFiveDays}
            to="/fivedaysweather"
            active={active === 0 ? false : true}
            onClick={() => {
              setActive(1);
              handleChangeReport("five days");
            }}
          >
            3-hour/5-day Forecast
          </ListGroup.Item>
        </ul>
        {/* path to different components */}
        <Switch>
          <Route path="/currentweather">
            <CurrentWeather
              data={weather}
              unit={unit}
              handleRefresh={handleRefresh}
            />
          </Route>
          <Route path="/fivedaysweather">
            <FiveDaysWeather
              data={forecast}
              unit={unit}
              handleRefresh={handleRefresh}
            />
          </Route>
        </Switch>
        {/* automatically redirect to the current weather */}
        <Redirect exact from="/" to="/currentweather" />
      </HashRouter>
      <div
        className="d-flex flex-row align-items-center 
                    justify-content-center"
      >
        <Button
          style={{ marginTop: 10 }}
          className="mb-2"
          onClick={handleRefresh}
        >
          Refresh
        </Button>
      </div>
    </Container>
  );
}
