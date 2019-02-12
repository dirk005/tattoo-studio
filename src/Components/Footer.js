import React from 'react';

const Footer = () => {
    return(
        <>
            <footer className='footer'>
                <p class="footer-text">
                    &copy; Copyright 2019 <a href='#' rel='noopener noreferrer' target='_blank' className='footer__link'>Tattoo Studio</a>.
            </p>
                <p class="footer-text">
                    Designed and developed by  <a href='https://dirk005.github.io/Portfolio/' rel='noopener noreferrer' target='_blank' className='footer__link'>Dirk Jansen van Rensburg</a>.
            </p>
            </footer>
        </>
    );
}

export default Footer;