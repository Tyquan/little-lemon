import Main from './Main'
import BookingForm from "./BookingForm";
import Header from "./Header";
import { useState } from 'react';
import { fetchAPI } from '../api/api';

function BookingPage() {
    const [resDate, setResDate] = useState(() => initializeTimes());

    function initializeTimes() {
        return fetchAPI(new Date());
    }
    function updateTimes(state){
        console.log("State: ", state);
        setResDate(fetchAPI(state));
    }

    return (
        <Main>
            <Header />
            <BookingForm resDate={resDate} updateTimes={updateTimes} />
        </Main>
    );
}

export default BookingPage;