import './productBtn.css';

import { useState } from 'react';
import MinusBtn from '../../../../assets/images/icon-minus.svg';
import PlusBtn from '../../../../assets/images/icon-plus.svg';

function ProduktBtn() {
    const [quantity, setQuantity] = useState(0);
    const handleMinus = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }
    const handlePlus = () => {
        setQuantity(quantity + 1);
    }
    const handleAdd = () => {
        if (quantity > 0) {
            alert(`Added ${quantity} items to the cart`);
        }
    }
    return (
        <div className="product__button-content">
            <div className="product__button">
                <button onClick={handleMinus} className="product__button-minus">
                    <img src={MinusBtn} alt="" />
                </button>
                <span className="product__button-quantity">{quantity}</span>
                <button onClick={handlePlus} className="product__button-plus">
                    <img src={PlusBtn} alt="" />
                </button>
            </div>
            <button onClick={handleAdd} className="product__button-add">
                <img className='product__button-img' src="https://ecommerce-andres-forero.netlify.app/media/icon-cart-add-YVOIUYCI.svg" alt="Shopping cart" />
                <span className="product__button-text">Add to cart</span>
            </button>
        </div>
    )
}

export default ProduktBtn