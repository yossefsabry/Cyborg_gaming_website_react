import './Hero.css';
import Btn from '../../Btn/Btn'

const Hero = () => {

    return (
        <div className='hero' data-aos="fade-right">
            <h3>Welcome To Cyborg</h3>
            <h1><em>BROWSE</em> OUR POPULAR GAMES HERE</h1>
            <a href='#most-popular'>
                <Btn name="Browser Now" />
            </a>
        </div>
    )
}

export default Hero;
