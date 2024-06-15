import HeroImage from '../heroAsset/HeroImage';
import HeroTitle from '../heroTitle/HeroTitle';
import NewsLetter from '../newsletter/NewsLetter';

import Wave from '../wave/Wave';
import './main.css';

function Main() {
  return (
    <div className='main__wrapper'>
      <div className='main__hero-section'>
        <HeroTitle />
        <HeroImage/>      
      </div>
      <Wave />
      <NewsLetter/>
    </div>
    
      
  )
}

export default Main
