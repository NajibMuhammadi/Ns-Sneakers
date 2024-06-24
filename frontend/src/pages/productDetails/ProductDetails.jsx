import './productDetails.css';
import BigImage from './productImages/bigImages/BigImage'
import ProductInfo from './productInfo/ProductInfo';

function ProductDetails() {
    return (
        <div className='product__details-wrapper'>
            <div className='product__details-main'>
                <div className='prodcut__details-content'>
                    <BigImage />
                    <ProductInfo/>
                </div> 
            </div>
        </div>
    )
}

export default ProductDetails
