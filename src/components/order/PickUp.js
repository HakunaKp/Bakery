import React, { useState } from "react";
import 'date-fns';
import Format from 'date-fns/format';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';

//import checkAvailability from '../pickup/CheckAvailability';

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
      <section className="pickUp">
        <div className="pickUp-content">

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="pickUp-selections">

              <h2 class="mt-0 mb-16">Select Pick Up Date &amp; Time</h2>
              <p class="m-0">Press the enter key with the pop-up open to confirm your choice.</p>
              <p class="m-0">Some dates may be unavailable due to high demand.</p>
              <p class="m-0">Order availability is updated every Sunday at 2PM EST.</p>

              <br></br>

              <KeyboardDatePicker
                label="Date Selection"
                format="MM/dd/yyyy"
                id="date-picker"
                style={{width:"100%"}} 
                onChange={handleDateChange}
                value={selectedDate}
                //shouldDisableDate={checkAvailability(date)}
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

            <br></br>
            <br></br>

            <h3 className="mt-0 mb-12">
              {`Selected Date: ${Format(selectedDate, 'PPP')}`}
            </h3>
            <h3 className="mt-0 mb-12">
            {`Selected Time: ${Format(selectedTime, 'p')}`}
            </h3>

          </MuiPickersUtilsProvider>

        </div>
      </section>
  );
}

export default PickUp;