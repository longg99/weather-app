import { Alert, Button } from 'react-bootstrap';
import React from 'react';

export default function ErrorInfo({ showAlert, handleClose, error }) {
    if (showAlert) {
        return (
            <Alert variant="danger">
                <Alert.Heading>Error</Alert.Heading>
                <p>
                    {error}
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
