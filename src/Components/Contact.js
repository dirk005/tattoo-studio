import React from 'react';
import studio from '../img/studio.png';

const Contact = () => {
    return(
        <>
            <section id='contact' className='contact'>
                <div className="contact__text">
                    <h2 className="heading-secondary">Contact us</h2>
                    
                    </div>
                <div className="contact__picture">
                    <img src={studio} alt="Contact " className="contact__picture--img" />
                </div>
            </section>
        </>
    );
}

export default Contact;