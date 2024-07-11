import './userProfile.css';

import {User, GreaterThan, Gear, SignIn, SignOut,} from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


function UserProfile({isLoggedIn}) {
    const [firstname, setfirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [imgUrl, setImgUrl] = useState(null);
    useEffect(() => {
        if(isLoggedIn) {
            axios.get('http://localhost:8085/ns-sneakers/getuser', {
                withCredentials: true
            }).then(res => {
                setfirstname(res.data.user.firstName)
                setLastname(res.data.user.lastName)
                const imageUrl = `http://localhost:8085/ns-sneakers/userImage/${res.data.user.image}`;
                setImgUrl(imageUrl);
                console.log(imageUrl)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [isLoggedIn]);
    
    return (
        <div className='sub__menu-wrap'>
            <div className='sub__menu'>
                <div className='user__info'>
                    {isLoggedIn ? (
                        <img className='user__image' src={imgUrl} alt="användarens profilbild" />
                    ) : (
                        <User size={32} className='user__image' />    
                    )}
                    {isLoggedIn ? (
                        <h1 className='user__title'>{firstname} {Lastname}</h1>
                    ) : (
                        <h1 className='user__title'>Log in to see more information</h1> 
                    )}
                </div>
                    <hr className='user__hr'/>
                    <Link to='/' className='user__menu-link'>
                        <User size={40} weight="fill" fill='grey' className='user__icon'/>
                        <p className='user__link-subtitle'>Edit Profile</p>
                        <GreaterThan size={32} />
                    </Link>
                    <Link to='/' className='user__menu-link'>
                        <Gear size={40} weight='fill' fill='grey' className='user__icon'/>
                        <p className='user__link-subtitle'>Settings</p>
                        <GreaterThan size={32} />
                    </Link>
            </div> 

        </div>
    )
}

export default UserProfile
