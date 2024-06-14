import HeroImage from '../heroAsset/HeroImage';
import HeroTitle from '../heroTitle/HeroTitle';
import './main.css';

function Main() {
  return (
      <div className='main__hero-section'>
          <HeroTitle/>
          <HeroImage/>      
      </div>
  )
}

export default Main
