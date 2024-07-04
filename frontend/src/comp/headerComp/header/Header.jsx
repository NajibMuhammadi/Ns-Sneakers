import Cart from "../cart/Cart"
import Nav from "../nav/Nav"
import ProfileImg from "../profile/ProfileImg"
import { IoSearchSharp} from "react-icons/io5";
import { PiLineVertical } from "react-icons/pi";

import './header.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function Header() { 
    const [userInput, setUserInput] = useState('');

    useEffect(() => { 
    }), [userInput];

    const handleSearch = (e) => {
        setUserInput(e.target.value);
    }

    const handleBtnClick = () => {
       console.log(userInput)
        setUserInput('')
    }

    return (
        <div className="header">
            <Nav />
            <div className="header__cart-container">
                <div className="header__search-container">
                    <input
                        type="text"
                        className="header__search-input"
                        placeholder="Search..."
                        onChange={handleSearch}
                        value={userInput}
                    />
                    <span className="header__search-span"><PiLineVertical/></span>
                    <IoSearchSharp
                        className="header__search-icon"
                        onClick={handleBtnClick}
                    />
                </div> 
                <Cart />
                <Link to='/login' className='header__navItem-link'>Log in</Link>
                <ProfileImg />
            </div>
        </div>
    )
}

export default Header
