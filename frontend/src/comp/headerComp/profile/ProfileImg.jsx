import './profileImg.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from "@phosphor-icons/react";
import UserProfile from '../../../pages/userProfile/UserProfile';

const ProfileImg = () => {
  const [img, setImg] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  
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
  return (
    <div className="profileImg" onClick={showProfileHandler}>
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
