import React, { useState } from 'react'
import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';



const WeatherApp = () => {
    let api_key = "5aa36dbce92f6622e2472e86c0782f24";
    const [wname, setWicon] = useState(cloud_icon);
    const search = async () => {
        const ele = document.getElementsByClassName("city-input");
        if (ele[0].value === "") {
            alert('Please enter the location first');
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ele[0].value}&units=Metric&appid=${api_key}`;
        let variable = await fetch(url);
        let data = await variable.json();
        const humidity = document.getElementsByClassName("humidity-percentege");
        const wind = document.getElementsByClassName("wind-speed");
        const temp = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temp[0].innerHTML = data.main.temp + " C";
        location[0].innerHTML = data.name;
      
        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon(clear_icon);
        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWicon(cloud_icon)
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWicon(drizzle_icon)
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setWicon(drizzle_icon)
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWicon(rain_icon)
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setWicon(rain_icon)
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWicon(snow_icon)
        }
        else {
            setWicon(clear_icon);
        }
    }


    return (
        <div className='container'>
            <div className='top-bar'>
                <input type='text' className='city-input' placeholder='Search...'></input>
                <div className='search-icon'>
                    <img src={search_icon} onClick={search} />
                </div>
            </div>
            <div className='weatherImage'>
                <img src={wname}></img>
            </div>
            <div className="weather-temp">24 C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentege">64%</div>
                        <div className='text'>Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-speed">18 km/Hr</div>
                        <div className='text'>wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
