import './userEditProfile.css';
import SideBar from '../../comp/sidebarComp/SideBar';

function UserEditProfile({isLoggedIn}) {
  return (
      <div className='edit__profile-main'>
          <SideBar isLoggedIn={isLoggedIn}/>
      </div>
  )
}

export default UserEditProfile
