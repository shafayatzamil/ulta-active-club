import React from 'react';
import './Header.css'
import images from '../images/logo-images.png';

const Header = () => {
    return (
        <div>
           <nav className='nav-section'>
            <img className='logo-images' src={images} alt="" />
            <h1 className='heading-line'>CTG EXERCISE CLUB </h1>
           </nav>
        </div>
    );
};

export default Header;