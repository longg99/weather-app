import React from 'react';
import Axios from 'axios';

export const getWeatherData = (city, country) => 
    Axios.get(`http://api.openweathermap.org/data/2.5/
        weather?q=${city},${country}&units=metric&&
        appid=690a99e3fce9056aa266481b4f8e7946`);


export const getWeatherDataByCity = (city) => 
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}
    &units=metric&&appid=690a99e3fce9056aa266481b4f8e7946`);

