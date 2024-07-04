import './profileImg.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {User} from "@phosphor-icons/react";

const ProfileImg = () => {
  const [img, setImg] = useState(null);
  
  useEffect(() => {
    axios.get('http://localhost:8085/ns-sneakers/profileimage', {
      withCredentials: true
    }).then(res => {
      setImg(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  
  return (
    <div className="profileImg">
       {img ? (
        <img className='header__profile-img' src={`http://localhost:8085/ns-sneakers/profileimage/`} alt="profile" />
      ) : (
        <User size={32} />
      )}
    </div>
  );
}



export default ProfileImg;
