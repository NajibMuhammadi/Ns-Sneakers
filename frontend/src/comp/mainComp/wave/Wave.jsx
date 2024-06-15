import './wave.css';

import HighlightImg from '../../../assets/images/p17-176.png'

function Wave() {
    return (
        <div className='main__wave-container'>
            <div className='main__wave'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="white" fillOpacity="1" d="M0,128L60,122.7C120,117,240,107,360,133.3C480,160,600,224,720,213.3C840,203,960,117,1080,106.7C1200,96,1320,160,1380,192L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </div>
            <div className='main__highlight'>
                <img className='highlight__image' src={HighlightImg} alt="highlight bild, en bild på en röd skor" />
                <div className='highlight__text'>
                    <h1 className='highlight__title'>Highlight</h1>
                    <p className='highlight__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}

export default Wave
