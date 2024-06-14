import './cart.css'
import cartIcon from '../../../assets/images/icon-cart.svg'
function Cart() {
    return (
        <>
            <img className='header__cart-icon' src={cartIcon} alt="Shopping Icon" />
            <div className='extra__cart'>
                <span className='extra__cart-span'>0</span>
            </div>
        </>
  )
}

export default Cart
