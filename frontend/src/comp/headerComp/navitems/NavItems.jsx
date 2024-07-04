import './navItems.css';
import { Link } from 'react-router-dom';

function NavItems() {
    return (
        <ul className='header__navlist'>
            <li className='header__navItems'>
                <Link to='/' className='header__navItem-link'>Collections</Link>
                <Link to='/men' className='header__navItem-link'>Men</Link>
                <Link to='/women' className='header__navItem-link'>Women</Link>
                <Link to='/about' className='header__navItem-link'>About</Link>
                <Link to='/contact' className='header__navItem-link'>Contact</Link>
                <Link to='/login' className='header__navItem-link'>Log in</Link>
            </li>
        </ul>
    )
}

export default NavItems
