import React from 'react';
import logo from '../img/logo-white.png';

const Header = () => {
    return (
      <>
        <header className="header">
          <div className="header__logo-box">
            <img className="header__logo" src={logo} alt="logo" />
          </div>

          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Tattoo</span>
              <span className="heading-primary--sub">studio</span>
            </h1>
            <a href="#about" className="btn btn--blue btn--animated">
              &#9660;
            </a>
          </div>
        </header>
      </>
    );
}

export default Header;