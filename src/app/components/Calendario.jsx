// components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  return (
    <div className="">
      <Calendar
        onChange={handleDateChange}
        value={date}
        
      />
    </div>
  );
};

export default MyCalendar;
