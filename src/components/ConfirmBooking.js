import Header from "./Header";
import { Link } from "react-router-dom";

function ConfirmBooking() {
    return (
        <>
            <Header />
            <section id="confirmSection">
                <h1 id="confirm">Reservation Confirmed!</h1>
                <Link to="/reserve">Book another reservation...</Link>
            </section>
        </>
    );
}

export default ConfirmBooking;