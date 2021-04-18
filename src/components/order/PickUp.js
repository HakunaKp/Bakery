import React, { useState } from "react";
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';

import checkAvailability from '../pickup/CheckAvailability';

const PickUp = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [selectedTime, setSelectedTime] = useState(new Date());
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

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

          </MuiPickersUtilsProvider>

        </div>
      </section>
    </AmplifyAuthenticator>
  );
}

export default PickUp;