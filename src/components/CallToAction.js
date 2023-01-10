import Chicago from './Chicago';
import {Link} from 'react-router-dom';
import food from '../images/food1.png';

function CallToAction(){
    return (
        <article id="heroSection">
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
                    <img src={food} alt="logo" id="heroImage" />
                </center>
            </section>
        </article>
    );
}

export default CallToAction;