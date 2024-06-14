import ProfileImage from '../../../assets/images/avatar.png';

import './profileImg.css';

function ProfileImg() {
  return (
    <img className='header__profile-img' src={ProfileImage} alt="Profile Image" />
  )
}

export default ProfileImg

