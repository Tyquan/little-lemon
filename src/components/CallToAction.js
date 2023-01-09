import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import Chicago from './Chicago';

function CallToAction(){
    return (
        <section id="heroSection">
            <section id="heroDetailsSection">
                <h1 id="heroMain">Little Lemon</h1>
                <h2 id="heroLocation">Chicago</h2>
                <Chicago />
                <Link to="/reserve">
                    <div id="makeReservationButton">
                        <h3>Reserve A Table</h3>
                    </div>
                </Link>
            </section>
            <section id="heroImageSection">
                <center>
                    <img src={logo} alt="logo" id="heroImage" />
                </center>
            </section>
        </section>
    );
}

export default CallToAction;