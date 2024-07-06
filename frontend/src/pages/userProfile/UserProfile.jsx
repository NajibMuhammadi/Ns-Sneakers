import './userProfile.css';

import {User, GreaterThan, Gear, SignIn, SignOut,} from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


function UserProfile() {
    const [img, setImg] = useState(null);
    const [firstname, setfirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [firstnamefalse, setfirstnamefalse] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8085/ns-sneakers/profile', {
            withCredentials: true
        }).then(res => {
            setImg(res.data.user.image);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8085/ns-sneakers/getuser', {
            withCredentials: true
        }).then(res => {
            setfirstname(res.data.user.firstName);
            setLastname(res.data.user.lastName);
            setfirstnamefalse(true);
        }).catch(err => {
            console.log(err);
        });
    }, []);
    
    return (
        <div className='sub__menu-wrap'>
            <div className='sub__menu'>
                <div className='user__info'>
                    {img ? (
                        <img className='user__image' src={`http://localhost:8085/ns-sneakers/profileimage/`} alt="användarens profilbild" />
                    ) : (<User size={32} className='user__image' />)}
                    {firstnamefalse ? (
                        <h1 className='user__title'>{firstname} {Lastname}</h1>
                    ) : (
                        <h1 className='user__title'>Log in to see more information</h1> 
                    )}
                </div>
                    <hr className='user__hr'/>
                    <Link to='/login' className='user__menu-link'>
                        <SignIn size={40} weight='fill' fill='grey' className='user__icon'/>
                        <p className='user__link-subtitle'>Login</p>
                        <GreaterThan size={32} />
                    </Link>
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
                    <Link to='/' className='user__menu-link'>
                        <SignOut size={40} weight='fill' fill='grey' className='user__icon'/>
                        <p className='user__link-subtitle'>Logout</p>
                        <GreaterThan size={32} />
                    </Link>
            </div> 

        </div>
    )
}

export default UserProfile
