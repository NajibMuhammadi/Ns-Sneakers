import Logo from "../logo/Logo"
import NavItems from "../navitems/NavItems"

import './nav.css';


function Nav() {
  return (
    <div className='header__nav'>
          <Logo />
          <NavItems/>
    </div>
  )
}

export default Nav
