import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";
import { Button } from 'react-bootstrap';
import history from '../components/History';
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { bool, instanceOf, func, object, objectOf, string } from 'prop-types'
import { isSameDay, startOfMonth } from 'date-fns'
import { isSelectable, mergeModifiers, setTime } from '../components/Calendar/utils'
import useControllableState from '../components/Calendar/useControllableState'
import Calendar from '../components/Calendar/Calendar'
import '../components/Calendar/style.css'

const PickUp = () => {

  function DatePickerCalendar({
    locale,
    date: selectedDate,
    month: receivedMonth,
    onDateChange,
    onMonthChange,
    minimumDate,
    maximumDate,
    modifiers: receivedModifiers,
    modifiersClassNames,
    weekdayFormat,
    touchDragEnabled
  }) {
    const isSelected = date => isSameDay(date, selectedDate) && isSelectable(date, { minimumDate, maximumDate })
    const modifiers = mergeModifiers({ selected: isSelected, disabled: isSelected }, receivedModifiers)
    const [month, setMonth] = useControllableState(receivedMonth, onMonthChange, startOfMonth(selectedDate || new Date()))
  
    const handleDateChange = date => {
      onDateChange(selectedDate ? setTime(date, selectedDate) : date)
    }
  
    return (
      <Calendar
        locale={locale}
        month={month}
        onMonthChange={setMonth}
        onDayClick={handleDateChange}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
        weekdayFormat={weekdayFormat}
        touchDragEnabled={touchDragEnabled}
      />
    )
  }
  
  DatePickerCalendar.propTypes = {
    locale: object.isRequired,
    date: instanceOf(Date),
    month: instanceOf(Date),
    onDateChange: func,
    onMonthChange: func,
    minimumDate: instanceOf(Date),
    maximumDate: instanceOf(Date),
    modifiers: objectOf(func),
    modifiersClassNames: objectOf(string),
    weekdayFormat: string,
    touchDragEnabled: bool
  }
  
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [date, setDate] = useState();

  return (
    <section className="pickUp">
      <h1 className="pickUpHeader">Select Pick Up Time & Date</h1>
      <p className="dateHeader">Selected date: {date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
      <div className="calendar">
        <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
      </div>

      <div>
        <Button className="home-buttons" variant="btn btn-success" onClick={() =>{
          products.forEach(product => {
            if (product.id === id) {
              addToCart({ ...product, id });
              return history.push("/cart");
            }
          })
        }}>Add To Cart</Button>
      </div>
      
    </section>
  );
};

export default PickUp;