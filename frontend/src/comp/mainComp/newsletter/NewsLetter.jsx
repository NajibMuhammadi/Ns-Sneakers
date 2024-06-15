import './newsLetter.css';
import newsletterImg from '../../../assets/images/side.png';

function NewsLetter() {
    return (
        <div className='newsletter__container'>
            <img className='newsletter__img' src={newsletterImg} alt="Newsletter image, en bild på en kartong" />
            <form className='newsletter__form'>
                <h1 className='newsletter__title'>Subscribe For Our Newsletter</h1>
                <div className='newsletter__input-container'>
                    <input className='newsletter__input' type="email" placeholder="Enter your email address" />
                    <button className='newsletter__btn'>Subscribe</button>
                </div>
            </form>
        </div>
    )
}

export default NewsLetter
