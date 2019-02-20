import React from 'react';
import SVGTattoo from "../img/svg/tattoo-machine.svg";
import SVGFist from "../img/svg/fist.svg";
import SVGGloves from "../img/svg/gloves.svg";
import SVGMoney from "../img/svg/money.svg";

const Features = () => {
    return(
        <>
            <section id='features' className= "feature" >     
                <div className='heading-box'>
                    <h2 className='heading-secondary'>Features</h2>
                </div>   
                <div className='feature__boxes'>
                    <div className="feature-box">                 
                        <img src={SVGTattoo} alt="tattoo machine" className="feature-box__icon" />              
                        <h3 className="heading-tertiary  u-margin-bottom-small">Best Tattoo's</h3>
                        <p className="fearute-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum commodi ea id ad delectus qui quibusdam, laborum consequatur libero quam.
                        </p>
                    </div>            
                    <div className="feature-box">
                        <img src={SVGFist} alt="Fists" className="feature-box__icon" />
                        <h3 className="heading-tertiary  u-margin-bottom-small">Fun Team</h3>
                        <p className="fearute-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum commodi ea id ad delectus qui quibusdam, laborum consequatur libero quam.
                        </p>
                    </div>           
                    <div className="feature-box">
                        <img src={SVGGloves} alt="Gloves" className="feature-box__icon" />
                        <h3 className="heading-tertiary  u-margin-bottom-small">Clean Shop</h3>
                        <p className="fearute-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum commodi ea id ad delectus qui quibusdam, laborum consequatur libero quam.
                        </p>
                    </div>                        
                    <div className="feature-box">
                        <img src={SVGMoney} alt="Money" className="feature-box__icon" />
                        <h3 className="heading-tertiary  u-margin-bottom-small">Affordable prices</h3>
                        <p className="fearute-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum commodi ea id ad delectus qui quibusdam, laborum consequatur libero quam.
                        </p>
                    </div>        
                </div>
          </section >
        </>
    )
}

export default Features;