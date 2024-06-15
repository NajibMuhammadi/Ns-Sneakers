import './popular.css';

import swiperImgOne from '../../../assets/images/p16-176.png';
import swiperImgTwo from '../../../assets/images/p19-176.png';

function Popular() {
    return (
        <div className='popular__container'>
            <h1 className='popular__title'>Populära Produkter</h1>
            <div className='popular__swiper'>
                <div className='swiper__slide'>
                    <img className='swiper__img' src={swiperImgOne} alt="placeholder bild" />
                    <h2 className='swiper__title'>Produkt 1</h2>
                    <p className='swiper__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='swiper__slide'>
                    <img className='swiper__img' src={swiperImgTwo} alt="placeholder bild" />
                    <h2 className='swiper__title'>Produkt 2</h2>
                    <p className='swiper__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='swiper__slide'>
                    <img className='swiper__img' src={swiperImgOne} alt="placeholder bild" />
                    <h2 className='swiper__title'>Produkt 3</h2>
                    <p className='swiper__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='swiper__slide'>
                    <img className='swiper__img' src={swiperImgTwo} alt="placeholder bild" />
                    <h2 className='swiper__title'>Produkt 4</h2>
                    <p className='swiper__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='swiper__slide'>
                    <img className='swiper__img' src={swiperImgOne} alt="placeholder bild" />
                    <h2 className='swiper__title'>Produkt 5</h2>
                    <p className='swiper__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                
            </div>
        </div>
    )
}

export default Popular
