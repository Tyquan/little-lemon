import logo from '../images/logo.png';
import hamburgerIcon from '../images/handburgerIcon.png';
import cart from '../images/cart.jpg';
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <div id="navButton">
                <img src={hamburgerIcon} id="navImage" alt="Nav Button" />
            </div>
            <div id="logoComponent">
                <img id="logoImage" src={logo} alt="Little Lemon Logo" />
            </div>
            <div id="navComponent">
                <Nav />
            </div>
            <div id="cartButton">
                <img src={cart} id="cartImage" alt="Cart Button" />
            </div>
        </header>
    );
}

export default Header;