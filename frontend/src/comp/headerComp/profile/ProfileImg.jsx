import './profileImg.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { User } from "@phosphor-icons/react";
import UserProfile from '../../../pages/userProfile/UserProfile';

const ProfileImg = ({isLoggedIn}) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);
  
  useEffect(() => {
    if (isLoggedIn) {
      axios.get('http://localhost:8085/ns-sneakers/getuser', {
        withCredentials: true
      }).then(res => {
        const imageUrl = `http://localhost:8085/ns-sneakers/userImage/${res.data.user.image}`;
        setImgUrl(imageUrl);
        console.log(imageUrl)
      }).catch(err => {
        console.log(err);
      });
    }
  }, [isLoggedIn]);
  
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
       {isLoggedIn ? (
        <img className='header__profile-img' src={imgUrl} alt="profile" />
      ) : (
          <User className='header__profile-img' />
      )}
      {showProfile && <UserProfile isLoggedIn={isLoggedIn} />}
    </div>
  );
}



export default ProfileImg;
