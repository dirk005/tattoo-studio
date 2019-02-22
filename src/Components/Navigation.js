import React ,{Component} from 'react';
import logo from '../img/logo-white.png';

class Navigation extends Component {
 
    // Hide navigation after item selected
    unCheckCheckBox = () => {
         document.getElementById("nav-toggle").checked = false;
    }

    render(){
        return(
            <>
                <div className='nav'>
                    <input type="checkbox" className="nav__checkbox" id="nav-toggle"/>
                    <label for="nav-toggle" className="nav__button">
                        <span className="nav__icon">&nbsp;</span>
                    </label>
                    <div className="nav__background">
                        &nbsp;
                    </div>
                    <div className="nav__logo-box">
                        <img className="mav__logo" src={logo} alt="logo" />
                    </div>
                    <nav className="nav__navigation">
                        <ul className='nav__list'>
                            <li className='nav__item' onClick={() => this.unCheckCheckBox()}><a href="#home" className='nav__link'>Home</a></li>
                            <li className='nav__item' onClick={() => this.unCheckCheckBox()}><a href="#about" className='nav__link'>About us</a></li>
                            <li className='nav__item' onClick={() => this.unCheckCheckBox()}><a href="#features" className='nav__link'>Features</a></li>
                            <li className='nav__item' onClick={() => this.unCheckCheckBox()}><a href="#artists" className='nav__link'>Artists</a></li>
                            <li className='nav__item' onClick={() => this.unCheckCheckBox()}><a href="#testimonial" className='nav__link'>Testimonials</a></li>
                            <li className='nav__item' onClick={() => this.unCheckCheckBox()}><a href="#gallery" className='nav__link'>Gallery</a></li>
                            <li className='nav__item' onClick={() => this.unCheckCheckBox()}><a href="#services" className='nav__link'>Services</a></li>
                            <li className='nav__item' onClick={() => this.unCheckCheckBox()}><a href="#contact" className='nav__link'>Contact us</a></li>
                        </ul>
                    </nav>            
            </div>
            </>
        );
    }
}

export default Navigation;