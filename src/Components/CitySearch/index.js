import React, { useRef } from 'react';
import { Container, Button, Alert, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CitySearch({ city, handleSearchOnClick }) {
    return (
        <Form className="container-xs align-items-center 
            justify-content-center p-2">
            <div>
                <Form.Group>
                    <Form.Label aria-required>Enter your city name: </Form.Label>
                    <Form.Control type="text" placeholder="City..." />
                </Form.Group>
            </div>
            <div className="col-xs-auto">
                <Form.Group>
                    <Form.Label>Enter your country name (optional): </Form.Label>
                    <Form.Control type="text" placeholder="Country..." />
                </Form.Group>
            </div>
            <div className="d-flex justify-content-center">
                <Button style={{marginTop: 10}}  
                onClick={handleSearchOnClick} 
                aria-expanded="false" aria-controls="weather alert" 
                >
                Show me the weather
                </Button>
            </div>
        </Form>
    )
}
