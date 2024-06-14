import './heroTitle.css';

function HeroTitle() {
    return (
        <div className='hero__text-container'>
            <h1 className='hero__title'>ns-sneakers</h1>
            <div className='hero__content'>
                <p className='hero__subtitle'>
                    <span className='hero__span'>Step up</span> your sneaker game with our <br />latest <span className='hero__span'>Premium</span> selection of coveted, rare, and must-have <br /> sneakers. <span className='hero__span'>Shop now</span> and stay ahead of the curve with our <br /> ultimate style upgrade!</p>
                <button className='hero__btn'> Start Shopping</button>
            </div>
        </div>
    )
}

export default HeroTitle
