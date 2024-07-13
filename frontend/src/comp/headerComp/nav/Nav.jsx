import Logo from "../logo/Logo"
import NavItems from "../navitems/NavItems"

import './nav.css';


function Nav({showNavItems}) {
  return (
    <div className='header__nav'>
          <Logo />
         {showNavItems && <NavItems/>}
    </div>
  )
}

export default Nav
