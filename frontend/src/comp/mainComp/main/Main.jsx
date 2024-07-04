import Login from '../../../pages/login/Login';
import Register from '../../../pages/register/Register';
import HeroImage from '../heroAsset/HeroImage';
import HeroTitle from '../heroTitle/HeroTitle';
import NewsLetter from '../newsletter/NewsLetter';
import Popular from '../popular/Popular';

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
      <Popular />
      <NewsLetter />
      <Register />
    </div>
    
      
  )
}

export default Main
