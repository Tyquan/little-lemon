import { useState } from "react";
import { submitAPI } from "../api/api";
import { useNavigate } from "react-router-dom";

function BookingForm({ resDate, updateTimes }) {
    const navigate = useNavigate();
    const [resTime, setResTime] = useState("");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("");

    function reserve() {
        const data = {resDate, resTime, guests, occasion};
        submitAPI(data);
        navigate('/confirm');
    }

    return (
        <section id="bookingFormComponent">
            <h1 id="reserve">Reserve A Table</h1>
            <form>
                <label htmlFor="resDate">Choose Date</label>
                <br/>
                <input name="resDate" onChange={(e) => {
                    updateTimes(new Date(e.target.value))
                }} value={resDate} type="date" id="resDate" />
                <br />
                <label htmlFor="res-time">Choose time</label>
                <br />
                <select value={resTime} id="res-time" name="resTime" onChange={(e) => setResTime(e.target.value)}>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
                <br />
                <label htmlFor="guests">Number of guests</label>
                <br />
                <input value={guests} onChange={(e) => setGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests" />
                <br />
                <label htmlFor="occasion">Occasion</label>
                <br />
                <select value={occasion} id="occasion" onChange={(e) => setOccasion(e.target.value)} name="occasion">
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <br />
                <div id="makeReservationButton" onClick={reserve}>
                    <h3>Reserve</h3>
                </div>
            </form>
        </section>
    );
}

export default BookingForm;