import { Alert, Button } from 'react-bootstrap';
import React from 'react';

export default function ErrorInfo({ showAlert, handleClose }) {
    if (showAlert) {
        console.log("hello there")
        return (
            <Alert variant="danger" transition="true">
                <Alert.Heading>Error</Alert.Heading>
                <p>
                
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={handleClose} variant="outline-success">
                        Close 
                    </Button>
                </div>
            </Alert>
        )
    }
    return null;
}
