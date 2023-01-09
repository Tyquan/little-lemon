import Main from './Main'
import BookingForm from "./BookingForm";
import Header from "./Header";
import { useReducer } from 'react';

const initializeTimes = {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
};

function updateTimes(state, action){
    return {availableTimes: state.availableTimes};
}

function BookingPage() {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    return (
        <Main>
            <Header />
            <BookingForm state={state} dispatch={dispatch} />
        </Main>
    );
}

export default BookingPage;