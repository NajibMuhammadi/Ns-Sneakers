import { Link } from 'react-router-dom'
import LogoIcon from '../../../assets/icons/logo.svg'

import './logo.css'

function Logo() {
  return (
      <Link to='/' className='header__logo-link'>
          <img className='header__logo' src={LogoIcon} alt="Ns-Sneakers Logo"/>
      </Link>
  )
}

export default Logo
