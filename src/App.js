import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import HomePage from './components/Hompage';
import BookingPage from './components/BookingPage';
import ConfirmBooking from './components/ConfirmBooking';

const Nav = () => {
    return (
        <BrowserRouter>
            <Routes id="navItems">
                <Route exact path='/' element=<HomePage />/>
                <Route exact path='/reserve' element=<BookingPage />/>
                <Route exact path='/confirm' element=<ConfirmBooking />/>
            </Routes>
        </BrowserRouter>
    );
}

export default Nav;