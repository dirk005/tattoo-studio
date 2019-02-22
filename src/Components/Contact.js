import React from 'react';
import studio from '../img/studio.png';
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import linkedin from "../img/linkedin.png";
import youtube from "../img/youtube.png";

const Contact = () => {
    return(
        <>
            <section id='contact' className='contact'>
                <div className="contact__text">
                    <h2 className="heading-secondary">Contact us</h2>
                    <p className='paragraph'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis totam fugiat rem consectetur adipisicing elit.
                    </p>
                    <ul className="contact__list">
                        <li className="contact__list--item contact__list--item-1">Joburg South Africa</li>
                        <li className="contact__list--item contact__list--item-2">Monday to Saturday 9<sub>am</sub> - 8<sub>pm</sub></li>
                        <li className="contact__list--item contact__list--item-3"><a href="tel:082000000" className="contact__link">082-000-0000</a></li>
                        <li className="contact__list--item contact__list--item-4"><a href="mailto:lorem@tattoostudio.co.za" className="contact__link">lorem@tattoostudio.co.za</a></li>
                    </ul>
                    <h3 className='heading-tertiary'>Follow us on social media</h3>
                    <div className="contact__social">
                        <a href='www.facebook.com/tattoostudio' className="contact__icon">
                            <img src={facebook} alt="facebook icon" className="contact__icon--img" />
                        </a>
                        <a href='www.instagram.com/tattoostudio' className="contact__icon">
                            <img src={instagram} alt="instagram icon" className="contact__icon--img" />
                        </a>
                        <a href='www.linkedin.com/tattoostudio' className="contact__icon">
                            <img src={linkedin} alt="linkedin icon" className="contact__icon--img" />
                        </a>
                        <a href='www.youtube.com/tattoostudio' className="contact__icon">
                            <img src={youtube} alt="youtube icon" className="contact__icon--img" />
                        </a>
                    </div>

                    </div>
                <div className="contact__picture">
                    <img src={studio} alt="Contact " className="contact__picture--img" />
                </div>
            </section>
        </>
    );
}

export default Contact;