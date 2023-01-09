import logo from '../logo.png';
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <div id="logoComponent">
                <img id="logoImage" src={logo} alt="Little Lemon Logo" />
            </div>
            <div id="navComponent">
                <Nav />
            </div>
        </header>
    );
}

export default Header;