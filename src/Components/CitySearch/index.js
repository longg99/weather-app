import React, { useRef } from 'react';
import { Container, Button, Alert, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const CitySearch = React.forwardRef((props, ref) => {
    return (
        <Form className="container align-items-center 
            justify-content-center p-2 col-xs-12 col-md-7 col-lg-5">
            <div>
                <Form.Group>
                    <Form.Label aria-required>Enter your city name:</Form.Label>
                    <Form.Control type="text" placeholder="City..."
                        ref={elem => ref.current["cityName"] = elem}
                    />
                </Form.Group>
            </div>
            <div>
                <Form.Group>
                    <Form.Label aria-required>Enter your country name (optional): </Form.Label>
                    <Form.Control type="text" placeholder="Country..." 
                        ref={elem => ref.current["countryName"] = elem}
                    />
                    <small className="form-text text-muted">
                        For a more precise result, please specify the country.    
                    </small>
                </Form.Group>
            </div>
            <div className="d-flex justify-content-center">
                <Button style={{marginTop: 10}}  
                onClick={props.handleSearchOnClick} 
                aria-expanded="false" aria-controls="weather alert" 
                >
                Show me the weather
                </Button>
            </div>
        </Form>
    )}
);

