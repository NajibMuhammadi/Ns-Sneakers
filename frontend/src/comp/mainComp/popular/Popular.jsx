import './popular.css';

import swiperImgOne from '../../../assets/images/p16-176.png';
import swiperImgTwo from '../../../assets/images/p19-176.png';

function Popular() {
    return (
        <div className='popular__container'>
            <h1 className='popular__title'>Trending This Week</h1>
            <div className='popular__product-container'>
                <div className='product__bigCard'></div>
                <div className='product__bigCard-desc'>
                    <h2 className='product__bigCard-title'>Nike Air Force 1 Flyknit 2.0</h2>
                    <p className='product__bigCard-text'>Shoes</p>
                    <p className='product__bigCard-price'>1 299 kr</p>
                </div>
                <div className='product__smallCard'>
                    <img className='product__smallCard-img' src={swiperImgOne} alt="placeholder bild" />
                    <div className='product__smallCard-desc'>
                        <h2 className='product__smallCard-title'>Produkt 3</h2>
                        <p className='product__smallCard-text'>Shoes</p>
                        <p className='product__smallCard-price'>1 299 kr</p>
                    </div>
                </div>
                <div className='product__smallCard'>
                    <img className='product__smallCard-img' src={swiperImgOne} alt="placeholder bild" />
                    <div className='product__smallCard-desc'>
                        <h2 className='product__smallCard-title'>Produkt 3</h2>
                        <p className='product__smallCard-text'>Lorem</p>
                        <p className='product__smallCard-price'>1 299 kr</p>
                    </div>
                </div>
                <div className='product__smallCard'>
                    <img className='product__smallCard-img' src={swiperImgOne} alt="placeholder bild" />
                    <div className='product__smallCard-desc'>
                        <h2 className='product__smallCard-title'>Produkt 3</h2>
                        <p className='product__smallCard-text'>Lorem ipsum dolor</p>
                        <p className='product__smallCard-price'>1 299 kr</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Popular
