import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import HomePage from './components/Hompage';
import BookingPage from './components/BookingPage';

const Nav = () => {
    return (
        <BrowserRouter>
            <Routes id="navItems">
                <Route exact path='/' element=<HomePage />/>
                <Route exact path='/reserve' element=<BookingPage />/>
            </Routes>
        </BrowserRouter>
    );
}

export default Nav;