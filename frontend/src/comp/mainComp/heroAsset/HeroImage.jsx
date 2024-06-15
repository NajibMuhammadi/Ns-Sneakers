import React from 'react'
import HeroImg from '../../../assets/images/main-h.png';

import './heroImage.css';

function HeroImage() {
    return (
        <div className='hero__image-container'>
            <img className='hero__image' src={HeroImg} alt="En bild på en skor" />
        </div>
        
    )
}

export default HeroImage
