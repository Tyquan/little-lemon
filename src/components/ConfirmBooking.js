import Header from "./Header";
import Main from "./Main";
import { Link } from "react-router-dom";

function ConfirmBooking() {
    return (
        <Main>
            <Header />
            <section id="confirmSection">
                <h1 id="confirm">Reservation Confirmed!</h1>
                <Link to="/reserve">Book another reservation...</Link>
            </section>
        </Main>
    );
}

export default ConfirmBooking;