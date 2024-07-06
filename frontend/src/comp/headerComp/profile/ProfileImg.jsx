import './profileImg.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { User } from "@phosphor-icons/react";
import UserProfile from '../../../pages/userProfile/UserProfile';

const ProfileImg = () => {
  const [img, setImg] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);
  
  useEffect(() => {
    axios.get('http://localhost:8085/ns-sneakers/profileimage', {
      withCredentials: true
    }).then(res => {
      setImg(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  
  const showProfileHandler = () => {
    setShowProfile(!showProfile);
  }

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    };
    if (showProfile) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  }, [showProfile]);
  return (
    <div className="profileImg" onClick={showProfileHandler} ref={profileRef}>
       {img ? (
        <img className='header__profile-img' src={`http://localhost:8085/ns-sneakers/profileimage/`} alt="profile" />
      ) : (
          <User className='header__profile-img' />
      )}
      {showProfile && <UserProfile />}
    </div>
  );
}



export default ProfileImg;
