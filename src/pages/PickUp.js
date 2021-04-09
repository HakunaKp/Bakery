import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import history from '../components/History';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';

// Update this function to change pick up date availability
function checkAvailability(date) {
  if (date) return false;
  // Return false if Saturday or Sunday
//  return date.getDay() === 0 || date.getDay() === 6;
}

function formatDate(date) {
  var month = date.substring(0, 2);
  var day = date.substring(3, 5);

  if (month === "01") return ("January" + day);
  if (month === "02") return ("February" + day);
  if (month === "03") return ("March" + day);
  if (month === "04") return ("April" + day);
  if (month === "05") return ("May" + day);
  if (month === "06") return ("June" + day);
  if (month === "07") return ("July" + day);
  if (month === "08") return ("August" + day);
  if (month === "09") return ("September" + day);
  if (month === "10") return ("October" + day);
  if (month === "11") return ("November" + day);
  if (month === "12") return ("December" + day);
}

// remove all whitespace and : characters from time before routing
function formatTime(time) {
  var formattedTime = "";
  for (let i in time) {
    if (time[i] !== ":" && time[i] !== " ") formattedTime += time[i];
  }
  return formattedTime;
}

function renderSelections(date, time) {
  return <h2>Selected Date: {date} | Selected Time: {time}</h2>;
};

const PickUp = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [selectedTime, setSelectedTime] = useState(new Date());
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    var formatted_date = formatDate(document.getElementById("date-picker").value);
    var formatted_time = formatTime(document.getElementById("time-picker").value);
    return history.push(`/cart/${formatted_date}/${formatted_time}`);
  }

  return (
    <AmplifyAuthenticator>
      <section className="pickUp">
        <div className="pickUp-content">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="pickUp-selections">

              <h1>Select Pick Up Date &amp; Time</h1>
              <br></br>
              <h4>Press the enter key with the pop-up open to confirm your choice.</h4>
              <h4>Please note some dates may be unavailable.</h4>
              <h4>Order availability is updated every Sunday at 2PM EST.</h4>
              <br></br>
              <br></br>

              <KeyboardDatePicker
                label="Date Selection"
                format="MM/dd/yyyy"
                id="date-picker"
                style={{width:"100%"}} 
                onChange={handleDateChange}
                value={selectedDate}
                shouldDisableDate={checkAvailability}
              />
            </div>
            
            <div className="pickUp-selections">
              <KeyboardTimePicker
              id="time-picker"
              label="Time Selection"
              style={{width:"100%"}}
              value={selectedTime}
              onChange={handleTimeChange}
              />
            </div>

            <renderSelections date={selectedDate} time={selectedTime}/>
            <br></br>

          </MuiPickersUtilsProvider>

          <Button className="home-buttons" variant="btn btn-success" onClick={handleSubmit}>Proceed to Checkout</Button>
          
        </div>
      </section>
    </AmplifyAuthenticator>
  );
}

export default PickUp;