import './userEditProfile.css';
import SideBar from '../../comp/sidebarComp/SideBar';
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserEditProfile({ isLoggedIn }) {
  const [imgUrl, setImgUrl] = useState(null);
  const [firstnmae, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  useEffect(() => {
    if (isLoggedIn) {
        axios.get('http://localhost:8085/ns-sneakers/auth/userdetails', {
            withCredentials: true
        }).then(res => {
            const imageUrl = `http://localhost:8085/ns-sneakers/auth/userImage/${res.data.user.image}`;
            setImgUrl(imageUrl);
            setFirstname(res.data.user.firstName);
            setLastname(res.data.user.lastName);
            setEmail(res.data.user.email);
            setUsername(res.data.user.userName);
        }).catch(err => {
            console.log(err);
        });
    }
  }, [isLoggedIn]);
  return (
    <div className='edit__profile-main'>
      <SideBar />
      <div className='edit__profile-info'>
        <h1 className='edit__profile-title'>Profile Information</h1>
        <span className='edit__profile-span'>Photo</span>
        <div className='edit__profile'>
          <img className='header__profile-img' src={imgUrl} alt="" />
        </div>
      </div>
      
      
      </div>
  )
}

export default UserEditProfile
