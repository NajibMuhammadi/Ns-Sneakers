import './dropDown.css';

import {User, GreaterThan, Gear} from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


function DropDown({isLoggedIn}) {
    const [firstname, setfirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [imgUrl, setImgUrl] = useState(null);
    useEffect(() => {
        if(isLoggedIn) {
            axios.get('http://localhost:8085/ns-sneakers/auth/userdetails', {
                withCredentials: true
            }).then(res => {
                setfirstname(res.data.user.firstName)
                setLastname(res.data.user.lastName)
                const imageUrl = `http://localhost:8085/ns-sneakers/auth/userImage/${res.data.user.image}`;
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
                    {isLoggedIn && (
                        <>
                            <img className='user__image' src={imgUrl} alt="användarens profilbild" />
                            <h1 className='user__title'>{firstname} {Lastname}</h1>
                        </>
                    )}
                </div>
                {isLoggedIn && (
                    <>
                        <hr className='user__hr'/>
                        <Link to='/editprofile/account' className='user__menu-link'>
                            <User size={40} weight="fill" fill='grey' className='user__icon' />
                            <p className='user__link-subtitle'>Edit Profile</p>
                            <GreaterThan size={32} />
                        </Link>
                        <Link to='/settings' className='user__menu-link'>
                            <Gear size={40} weight="fill" fill='grey' className='user__icon'/>
                            <p className='user__link-subtitle'>Settings</p>
                            <GreaterThan size={32} />
                        </Link>
                    </>
                )}

                    
            </div> 

        </div>
    )
}

export default DropDown
