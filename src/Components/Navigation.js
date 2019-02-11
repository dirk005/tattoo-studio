import React from 'react';
import logo from '../img/logo-white.png';

const Navigation = () => {
    return(
        <>
            <nav className='nav'>
                <div className="nav__logo-box">
                    <img className="mav__logo" src={logo} alt="logo" />
                </div>
                <ul className='nav__list'>
                    <li className='nav__item'><a href="#home" className='nav__link'>Home</a></li>
                    <li className='nav__item'><a href="#about" className='nav__link'>About us</a></li>
                    <li className='nav__item'><a href="#features" className='nav__link'>Features</a></li>
                    <li className='nav__item'><a href="#artists" className='nav__link'>Artists</a></li>
                    <li className='nav__item'><a href="#testimonial" className='nav__link'>Testimonials</a></li>
                    <li className='nav__item'><a href="#gallery" className='nav__link'>Gallery</a></li>
                    <li className='nav__item'><a href="#services" className='nav__link'>Services</a></li>
                    <li className='nav__item'><a href="#contact" className='nav__link'>Contact us</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;