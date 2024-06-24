import './bigImage.css';
import BigImg from '../../../../assets/images/p1-1000.jpg';
import { useState } from 'react';
import SmallImages from '../smallImages/SmallImages';

function BigImage() {
    const [selectedImg, setSelectedImg] = useState(BigImg);

    const handleSmallImageClick = (image) => {
        setSelectedImg(image);
    }
    return (
        <div className='product__large-image'>
            <img className='product__large-img' src={selectedImg} alt="" />
            <SmallImages handleSmallImageClick={handleSmallImageClick}/>
        </div>  

  )
}

export default BigImage
