import React from 'react';


const Header = () => {
    return (
      <>
        <header id='home' className="header">          

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