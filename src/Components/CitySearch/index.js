import React, { useState, useEffect } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CitySearch({
  handleSearchOnClick,
  handleCityChange,
  handleCountryChange,
  handleUnitOnChange,
  openWeather,
  showAlert,
  unit,
  show,
}) {
  //state to only trigger the onChanges when user stopped typing
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  //set the submit text of the btn
  let submitText;
  if (!openWeather && !showAlert) {
    submitText = "Show me the weather";
  } else {
    submitText = "Hide";
  }

  //this effect will delay the onChange function of the city and country field
  useEffect(() => {
    //wait 1 second before sending the state up to the parent
    const timeOut = setTimeout(() => {
      handleCityChange(city);
      handleCountryChange(country);
    }, 850);
    //clear the timeout when done
    return () => {
      clearTimeout(timeOut);
    };
  }, [city, country, handleCityChange, handleCountryChange]);

  return (
    <Form
      className="container align-items-center 
            justify-content-center p-2 col-xs-12 col-md-7 col-lg-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {/* if the weather component is showing, hide the input */}
      <div className={show ? "" : "d-none"}>
        <div className="d-flex justify-content-center">
          <Button
            onClick={handleSearchOnClick}
            aria-expanded="false"
            aria-controls="weather alert"
            type="submit"
          >
            Use my current location
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <span className="lead">-----------OR-----------</span>
        </div>
        <Form.Group className="">
          <FloatingLabel
            controlId="cityName"
            label="City name:"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="City..."
              onChange={(e) => setCity(e.target.value)}
              autoFocus
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="countryCode"
            label="Country code (optional):"
          >
            <Form.Control
              type="text"
              placeholder="Country code..."
              onChange={(e) => setCountry(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <small className="form-text text-muted">
            Use country code for a more precise result. Refer to this{" "}
            <a
              href="https://www.iso.org/obp/ui/#home"
              target="_blank"
              rel="noreferrer"
            >
              link
            </a>
            &nbsp;for the country codes.
          </small>
        </Form.Group>

        <div className="mt-2">
          <Form.Group className="d-flex justify-content-center">
            <Form.Check
              name="unitRadio"
              inline
              label="Metric"
              type="radio"
              onChange={handleUnitOnChange}
              value="metric"
              checked={unit === "metric"}
            />
            <Form.Check
              inline
              label="Imperial"
              name="unitRadio"
              onChange={handleUnitOnChange}
              type="radio"
              value="imperial"
              checked={unit === "imperial"}
            />
          </Form.Group>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          className="mt-1"
          onClick={handleSearchOnClick}
          aria-expanded="false"
          aria-controls="weather alert"
          type="submit"
        >
          {submitText}
        </Button>
      </div>
    </Form>
  );
}
