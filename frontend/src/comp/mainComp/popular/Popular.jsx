import './popular.css';

import swiperImgOne from '../../../assets/images/p16-176.png';
import swiperImgTwo from '../../../assets/images/p19-176.png';
import swiperImgThree from '../../../assets/images/p20-176.png';

function Popular() {
    return (
        <div className='popular__container'>
            <h1 className='popular__title'>Trending This Week</h1>
            <div className='popular__product-container'>
                <div className='product__bigCard'></div>
                <div className='product__bigCard-desc'>
                    <h2 className='product__bigCard-title'>Nike Air Force 1 Flyknit 2.0</h2>
                    <span className='product__bigCard-text'>Shoes</span>
                    <h3 className='product__bigCard-price'>1 299 kr</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est asperiores animi, quisquam deserunt numquam totam doloremque quia unde vitae explicabo cupiditate, atque sed veritatis consequatur voluptatum, aperiam laboriosam impedit.</p>
                </div>
                <div className='product__smallCard'>
                    <img className='product__smallCard-img' src={swiperImgTwo} alt="placeholder bild" />
                    <div className='product__smallCard-desc'>
                        <h2 className='product__smallCard-title'>Nike Air Max SC</h2>
                        <p className='product__smallCard-text'>Mens shoes</p>
                        <h3 className='product__smallCard-price'>1 299 kr</h3>
                    </div>
                </div>
                <div className='product__smallCard'>
                    <img className='product__smallCard-img' src={swiperImgThree} alt="placeholder bild mewo" />
                    <div className='product__smallCard-desc'>
                        <h2 className='product__smallCard-title'>Produkt 3</h2>
                        <p className='product__smallCard-text'>Lorem</p>
                        <h3 className='product__smallCard-price'>1 299 kr</h3>
                    </div>
                </div>
                <div className='product__smallCard'>
                    <img className='product__smallCard-img' src={swiperImgOne} alt="placeholder bild blab bla" />
                    <div className='product__smallCard-desc'>
                        <h2 className='product__smallCard-title'>Produkt 3</h2>
                        <p className='product__smallCard-text'>Lorem ipsum dolor</p>
                        <h3 className='product__smallCard-price'>1 299 kr</h3>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Popular
