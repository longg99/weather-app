import React, { useState, useEffect } from 'react'
import { Container, Button, ListGroup } from 'react-bootstrap';
import 'moment-timezone';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import CurrentWeather from './CurrentWeather';
import FiveDaysWeather from './FiveDaysWeather';

export default function Weather({ data, unit, handleRefresh }) {

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
        }
        else {
            setClassNameCurr("text-dark text-center col");
            setClassNameFiveDays("text-light text-center col");
        }
    }, [active])

    //return null if no weather
    if (data && Object.keys(data).length === 0 && data.constructor === Object) {
        return null;
    }

    return (
        <Container fluid className="justify-content-center border bg-light w-75">
            {/* use a router to get different component */}
            <BrowserRouter>
                <ul className="row p-0">
                    <ListGroup.Item as={Link} className= { classNameCurr } 
                        to="/currentweather" active={active === 0 ? true : false}
                        onClick={(e) => {
                            setActive(0);
                        }}>
                            Current weather</ListGroup.Item>
                    <ListGroup.Item as={Link} className = { classNameFiveDays } 
                        to="/fivedaysweather" active={active === 0 ? false : true}
                        onClick={() => setActive(1)}>
                            Five days Forecast</ListGroup.Item>
                </ul>
                {/* path to different components */}
                <Switch>
                    <Route path="/currentweather">
                        <CurrentWeather data={data} unit={unit} handleRefresh={handleRefresh} />
                    </Route>
                    <Route path="/fivedaysweather" component={ FiveDaysWeather } />
                </Switch>
            </BrowserRouter>
            <div className="d-flex flex-row align-items-center 
                    justify-content-center">
                <Button style={{marginTop: 10}}  
                    className="mb-2" onClick={ handleRefresh }
                >
                Refresh
                </Button>
            </div>
        </Container>
    )
}
