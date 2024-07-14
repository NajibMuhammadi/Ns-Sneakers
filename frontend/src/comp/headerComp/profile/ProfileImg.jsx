import './profileImg.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { User } from "@phosphor-icons/react";
import DropDown from '../../dropDownComp/DropDown';

const ProfileImg = ({isLoggedIn, isEditProfilePage}) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const profileRef = useRef(null);
  
  useEffect(() => {
    if (isLoggedIn) {
      axios.get('http://localhost:8085/ns-sneakers/auth/userdetails', {
        withCredentials: true
      }).then(res => {
        const imageUrl = `http://localhost:8085/ns-sneakers/auth/userImage/${res.data.user.image}`;
        setImgUrl(imageUrl);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [isLoggedIn]);
  
  const showDropDownHandler = () => {
    if (!isLoggedIn) {
      window.location.href = '/login';
    } else if (!isEditProfilePage) {
      setShowDropDown(!showDropDown);
  }
  }

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowDropDown(false);
      }
    };
    if (showDropDown) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  }, [showDropDown]);
  return (
    <div className="profileImg" onClick={showDropDownHandler} ref={profileRef}>
       {isLoggedIn ? (
        <img className='header__profile-img' src={imgUrl} alt="profile" />
      ) : (
          <User className='header__profile-img' />
      )}
      {isLoggedIn && !isEditProfilePage && (showDropDown && <DropDown isLoggedIn={isLoggedIn} />)}
    </div>
  );
}



export default ProfileImg;
