import React, { useState } from "react";
import './App.css';

import { BsFillSunFill, BsSnow2} from 'react-icons/bs';
import { WiCelsius } from 'react-icons/wi'

function App() {

  const apiKey = '8753ed41c51a102a72a3ac7f1e21da01';
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");
  let c;
  const getWeather = (e) =>{
    if(e.key === 'Enter'){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
      .then( response=> response.json())
      .then(
        data => {
          setWeatherData(data);
          setCity("");
          setCelsius("");
        }
      )
    }
  }
  const fToc = () =>
  {
     c = ((weatherData.main.temp)-32) * 5/9
     setCelsius (c.toFixed(2));  

     if(((weatherData.main.temp) < 70)
     ? setFahrenheit(<p style={{color:"green"}}>{Math.round(weatherData.main.temp)}ºF  <BsSnow2/></p>)
     : setFahrenheit(<p style={{color:"red"}}>{Math.round(weatherData.main.temp)}ºF<BsFillSunFill/></p>));
  }
  
const noOfDay = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

// day
  const d = new Date();
  const print = d.getDay();
  const today = noOfDay[print];

//hour
  let hour = d.getHours();
  let period = "AM";

  if ((hour === 0)
  ? (hour = 12)
  : ((hour > 12)
  ? (hour ="0" + hour - 12 ) && (period= "PM")
  : (hour = ("0"+ hour))));

//min
  let mins = d.getMinutes();

return (

<div className="App">
  <div className="body">  
    <div className="App-header">
        <div className="day">
          {today}
          <span style={{margin:"50px",fontSize:"20px"}}>
            {hour}:{mins} {period}
          </span>
        </div>
    </div>
        <input 
      className="input"
      placeholder="Enter City Name..."
      onChange={e=>{setCity(e.target.value)}}
      value={city}
      onKeyPress = {getWeather}/>

    <div>
      {typeof weatherData.main === 'undefined' 
        ? (
          <div>
            <p  className="welcome">Welcome to Weather App</p>            

          </div>
          ) : (
          <div className="weather">
            <p>{weatherData.name}</p>
              <p>{fahrenheit}</p>
                {celsius}

        </div>)
      }        <button  className="button" onClick={fToc}>Convert</button>
          <div style={{font_size:"30"}}>
    </div>

    </div>
  </div>          
</div>

);
}

export default App;
