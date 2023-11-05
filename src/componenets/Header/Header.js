import './Header.css';
import logo from '../../images/logo.png';
import profile from '../../images/profile-header.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';




function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const showToggleMenu = () => {
        setShowMenu(!showMenu);
    }
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <header>
            <div className='logo'>
                <Link to="/">
                    <img src={logo} alt='logo' />
                </Link>
            </div>
            <div className='search'>
                <input type='text' placeholder='Type Something' className={showMenu ? 'show-input' : ''} />
            </div>
            <nav>
                <ul className={showMenu ? 'show-menu' : ''}>
                    <li onClick={handleScrollTop} className=' links-header'><Link className='links-header' to="/">Home</Link></li>
                    <li onClick={handleScrollTop}><Link className='links-header' to="browse">Browse</Link></li>
                    <li onClick={handleScrollTop}><Link className='links-header' to="details">Details</Link></li>
                    <li onClick={handleScrollTop}><Link className='links-header' to="stream">Stream</Link></li>
                    <li onClick={handleScrollTop}><Link className='links-header' to="profile"><span>Profile</span> <img src={profile} alt='profile_image' /></Link></li>
                </ul>
            </nav>
            <div onClick={showToggleMenu} className={`toggle-menu`} >
                <div></div>
            </div>
        </header>
    );
}

export default Header;
