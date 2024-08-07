import Cart from "../cart/Cart"
import Nav from "../nav/Nav"
import ProfileImg from "../profile/ProfileImg"
import { IoSearchSharp} from "react-icons/io5";
import { PiLineVertical } from "react-icons/pi";

import './header.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";

function Header({isEditProfilePage, isLoggedIn, setIsLoggedIn}) { 
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => { 
        axios.get('http://localhost:8085/ns-sneakers/auth/userdetails', {
            withCredentials: true
        }).then(res => {
           setIsLoggedIn(true)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        })
        
    }), [userInput, setIsLoggedIn];

    const handleSearch = (e) => {
        setUserInput(e.target.value);
    }

    const handleBtnClick = () => {
       console.log(userInput)
        setUserInput('')
    }

    const handleLogout = () => {
        axios.get('http://localhost:8085/ns-sneakers/auth/logout', {
            withCredentials: true
        }).then(res => {
            if (res.data.success) {
                window.location.href = '/';
            }
        }).catch(err => {
            console.log(err)
        });
    }

    return (
        <div className="header">
            {isLoading && <div className="loading__overlay">
                <div className="loading__spinner"></div>
            </div>}
            <Nav showNavItems={!isEditProfilePage} />
            <div className="header__cart-container">
                {!isEditProfilePage && (
                    <div className="header__search-container">
                        <input
                            type="text"
                            className="header__search-input"
                            placeholder="Search..."
                            onChange={handleSearch}
                            value={userInput}
                        />
                        <span className="header__search-span"><PiLineVertical /></span>
                        <IoSearchSharp
                            className="header__search-icon"
                            onClick={handleBtnClick}
                        />
                    </div>
                )}
                {!isEditProfilePage && <Cart />}
                {isLoggedIn ? (
                    <Link to='/'>
                        <button className="header__profile-btn" onClick={handleLogout}>Logout</button>
                    </Link>
                ) : (
                    <Link to='/login'>
                        <button className="header__profile-btn">Login</button>
                    </Link>
                )}
                {<ProfileImg isLoggedIn={isLoggedIn} setIsLoading={setIsLoading} isEditProfilePage={isEditProfilePage} />}
            </div>
        </div>
    )
}

export default Header
