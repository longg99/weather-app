import React, { useState, useEffect } from 'react';
import { Container, Button, Alert, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CitySearch ( {handleSearchOnClick, handleCityChange,
    handleCountryChange, submitText }){
    //state to only trigger the onChanges when user stopped typing
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    //this effect will delay the onChange function of the city and country field
    useEffect(() => {
        //wait 1 second before sending the state up to the parent
        const timeOut = setTimeout(() => {
            handleCityChange(city);
            handleCountryChange(country);
        }, 1000)
        //clear the timeout when done
        return () => {
            clearTimeout(timeOut);
        }
    }, [city, country, handleCityChange, handleCountryChange])

    return (
        <Form className="container align-items-center 
            justify-content-center p-2 col-xs-12 col-md-7 col-lg-5">
            <div>
                <Form.Group className="mb-2">
                    <Form.Label aria-required>Enter your city name:</Form.Label>
                    <Form.Control type="text" placeholder="City..."
                        onChange={(e) => setCity(e.target.value)}
                        autoFocus
                    />
                </Form.Group>
            </div>
            <div>
                <Form.Group>
                    <Form.Label aria-required>Enter your country name (optional): </Form.Label>
                    <Form.Control type="text" placeholder="Country..." 
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    <small className="form-text text-muted">
                        For a more precise result, please specify the country.    
                    </small>
                </Form.Group>
            </div>
            <div className="d-flex justify-content-center">
                <Button style={{marginTop: 10}}  
                onClick={handleSearchOnClick} 
                aria-expanded="false" aria-controls="weather alert" 
                >
                {submitText}
                </Button>
            </div>
        </Form>
    )
};

