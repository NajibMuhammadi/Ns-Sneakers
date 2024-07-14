import './userEditProfile.css';
import SideBar from '../../comp/sidebarComp/SideBar';
import { Routes, Route } from 'react-router-dom';
import UserEditAccount from '../userEditAccount/UserEditAccount';
import UserEditEmail from '../userEditEmail/UserEditEmail';
import UserEditPassword from '../userEditPassword/UserEditPassword';
function UserEditProfile({isLoggedIn}) {
  return (
    <div className='edit__profile-main'>
      <SideBar />   
      <div className='edit__profile'>
        <Routes>
          <Route path='account' className='edit__profile-link' element={<UserEditAccount isLoggedIn={isLoggedIn} />} />
          <Route path='email' className='edit__profile-link' element={<UserEditEmail />} />
          <Route path='password' className='edit__profile-link' element={<UserEditPassword/>} />
        </Routes>
      </div>
    </div>
  )
}

export default UserEditProfile
