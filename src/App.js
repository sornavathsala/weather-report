// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import ListGroup from 'react-bootstrap/ListGroup'; 

import React from "react";
import './App.css';

function App() {

const f = 150;
let c= (f-32) * 5/9;

if((c < 70)
?c =  <p style={{color:"green"}}>{c.toFixed(2)}</p> : c = <p style={{color:"red"}}>{c.toFixed(2)}</p>);

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
  ? (hour ="0" + hour - 12 ) && (period= "PM") : (hour = ("0" + hour))));

//min
  let mins = d.getMinutes();

  // if((mins < 10)? mins = "0"+mins )
return (

<div className="App">
  <div className="App-header">
  <div className="day">
    {today} <span style={{margin:"40px"}}>{hour}:{mins} {period}</span>
  </div>

  <div className="weather">
    {c}<span>C</span>
  </div>
  <button className="btn">Convert</button>
</div>
  </div>

);
}

export default App;
