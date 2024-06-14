import Cart from "../cart/Cart"
import Nav from "../nav/Nav"
import ProfileImg from "../profile/ProfileImg"
import { IoSearchSharp } from "react-icons/io5";

import './header.css';

function Header() {
    
  return (
      <div className="header">
          <Nav/>
          <div className="header__cart-container">
              <IoSearchSharp />
              <Cart />
              <ProfileImg />
          </div>
          
          
      </div>
  )
}

export default Header
