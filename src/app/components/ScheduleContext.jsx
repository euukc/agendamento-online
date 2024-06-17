"use client"

import { createContext, useContext, useState } from 'react';

const ScheduleContext = createContext();

export const useSchedule = () => useContext(ScheduleContext);

export const ScheduleProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');

    return (
        <ScheduleContext.Provider value={{ selectedDate, setSelectedDate, selectedTime, setSelectedTime }}>
            {children}
        </ScheduleContext.Provider>
    );
};
