import BookingForm from "./BookingForm";
import Header from "./Header";
import { useState } from 'react';
import { fetchAPI } from '../api/api';

function BookingPage() {
    const [resDate, setResDate] = useState(() => initializeTimes());
    const [availableTimes, setAvailableTimes] = useState("");

    function initializeTimes() {
        return fetchAPI(new Date());
    }
    function updateTimes(state){
        setAvailableTimes(state);
    }

    return (
        <>
            <Header />
            <BookingForm resDate={resDate} availableTimes={availableTimes} updateTimes={updateTimes} setResDate={setResDate} />
        </>
    );
}

export default BookingPage;