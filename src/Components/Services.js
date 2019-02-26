import React from 'react';

const Services = () => {
    return(
        <>
        <section id="services" className="services">
                <div className='heading-box'>
                    <h2 className='heading-section'>Services</h2>
                </div>
                <div className="services__cards">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading--span card__heading-span--1">
                                        Piercings
                                   </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                    <li>Ear piercings</li>
                                        <li>Tongue piercings</li>
                                        <li>And more</li>                                       
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-from">from</p>
                                        <p className="card__price-value">R250</p>
                                    </div>
                                    <a href="#contact" className="btn btn--small">Book now!</a>
                                </div>
                            </div>
                        </div>
                   
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading--span card__heading-span--2">
                                        Design
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Free quote</li>
                                        <li>Unique style</li>
                                        <li>1 week wating time</li>                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-from">from</p>
                                        <p className="card__price-value">R2000</p>
                                    </div>
                                    <a href="#contact" className="btn btn--small">Book now!</a>
                                </div>
                            </div>
                        </div>
                  
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading--span card__heading-span--3">
                                        Tattoo
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Best designs</li>
                                        <li>Top Artist</li>
                                        <li>Comfortable chair </li>                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-from">Only</p>
                                        <p className="card__price-value">R800<sub>per hour</sub></p>
                                    </div>
                                    <a href="#contact" className="btn btn--small">Book now!</a>
                                </div>
                            </div>
                        </div>
                </div>
        </section>
        </>
    );
}

export default Services;