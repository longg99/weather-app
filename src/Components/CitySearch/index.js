import React from 'react';
import { Container, Button, Alert, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CitySearch({ city }) {
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
        </Form>
    )
}
