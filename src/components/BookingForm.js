import { useState } from "react";

function BookingForm({ state, dispatch }) {
    const [resDate, setResDate] = useState(Date.now);
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("");

    return (
        <section id="bookingFormComponent">
            <h1>Reserve A Table</h1>
            <form>
                <label htmlFor="resDate">Choose Date</label>
                <input name="resDate" onChange={(e) => setResDate(e.target.value)} value={resDate} type="date" id="resDate" />
                <br />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name="resTime" onChange={(e) => dispatch({type: '', payload: e.target.value})}>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
                <br />
                <label htmlFor="guests">Number of guests</label>
                <input value={guests} onChange={(e) => setGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests" />
                <br />
                <label htmlFor="occasion">Occasion</label>
                <select value={occasion} id="occasion" onChange={(e) => setOccasion(e.target.value)} name="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <br />
                <input type="submit" value="Make Your reservation"></input>
            </form>
        </section>
    );
}

export default BookingForm;