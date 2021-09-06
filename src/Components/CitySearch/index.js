import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CitySearch({
  handleSearchOnClick,
  handleCityChange,
  handleCountryChange,
  handleUnitOnChange,
  openWeather,
  showAlert,
  unit,
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
      <Form.Group className="mb-2">
        <Form.Label aria-required>Enter your city name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="City..."
          onChange={(e) => setCity(e.target.value)}
          autoFocus
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label aria-required>
          Enter your country code (optional):
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Country code..."
          onChange={(e) => setCountry(e.target.value)}
        />
        <small className="form-text text-muted">
          For a more precise result, please specify the country code. Refer to
          this{" "}
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
      <div className="d-flex justify-content-center">
        <Button
          style={{ marginTop: 10 }}
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
