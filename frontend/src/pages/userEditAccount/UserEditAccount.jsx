import './userEditAccount.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Camera } from '@phosphor-icons/react';

function UserEditAccount({ isLoggedIn }) {
  const [imgUrl, setImgUrl] = useState(null);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  useEffect(() => {
    if (isLoggedIn) {
      axios.get('http://localhost:8085/ns-sneakers/auth/userdetails', {
        withCredentials: true
      }).then(res => {
        setFirstname(res.data.user.firstName);
        setLastname(res.data.user.lastName);
        setUsername(res.data.user.userName);
        const imageUrl = `http://localhost:8085/ns-sneakers/auth/userImage/${res.data.user.image}`;
        setImgUrl(imageUrl);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [isLoggedIn]);

  const updateImage = () => {
    const formData = new FormData();
    formData.append('image', image);
    axios.post('http://localhost:8085/ns-sneakers/auth/upload', formData, {
      withCredentials: true
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
  return (
    <div className='account'>
      <h1 className='account__title'>Account Information</h1>
      <div className='account__info'>
        <span className='account__info-span'>Photo</span>
        <div className='account__image-content'>
          {isLoggedIn && (
            <>
              <div className='account__image-wrapper'>
                <img className='account__image' src={image?URL.createObjectURL(image):imgUrl} alt="user profile" />
                <input
                  type="file"
                  id="file"
                  className='account__file-input'
                  onChange={imageHandler}
                  style={{ display: 'none' }}
                />
                <label htmlFor="file" className='account__change-span'>
                  <Camera size={32} className='account__change-icon' />
                  Change photo
                </label>
              </div>
              <button
                className='account__image-btn header__profile-btn'
                onClick={updateImage}
              >Update</button>
              <button className='account__image-btn header__profile-btn'>Remove</button>
            </>
          )}
        </div>
        
          {isLoggedIn && (
          <>
            <div className='account__user-info'>
              <span className='account__user-span'>Firstname: </span>
              <h1 className='account__user-title'>{firstname}</h1>
            </div>
            <div className='account__user-info'>
              <span className='account__user-span'>Lastname: </span>
              <h1 className='account__user-title'>{lastname}</h1>
            </div>
            <div className='account__user-info'>
              <span className='account__user-span'>Username: </span>
              <h1 className='account__user-title'>{username}</h1>
            </div>

            </>
          )}
      </div>
    </div>
  )
}

export default UserEditAccount
