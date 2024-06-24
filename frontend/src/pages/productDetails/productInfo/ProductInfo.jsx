import './productInfo.css';
import ProduktBtn from './productBtn/ProductBtn'

function ProductInfo() {
    return (
        <div className="main__product-info">
            <p className="product__info-subtitle">sneaker company</p>
            <h1 className="product__info-title">Fall Limited Edition Sneakers</h1>
            <p className="product__info-text">These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="product__price-content">
                <div className="product__price-flex">
                    <p className="product__price">$125.00</p>
                    <p className="product__price-discount">50%</p>
                </div>
                <p className="product__price-discounted">$250.00</p>
            </div>
            <ProduktBtn/>
        </div>
    )
}

export default ProductInfo
