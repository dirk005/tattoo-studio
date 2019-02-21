import React, {Component} from 'react';

class Testimonial extends Component{
    constructor(){
        super();
        this.state = {
            testimonials : [
                {
                    name: 'Daisey Brunt',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis egestas sapien eget lectus dignissim posuere.Praesent viverra orci vel metus consectetur, eu condimentum ipsum ornare.Vivamus vitae iaculis ex.Donec.  ',
                    date : '2018-12-01'
                },
                {
                    name: 'Stewart Holden',
                    description: 'Lorem ipsum dolor sit amet,. Donec facilisis gravida urna in pretium. consectetur adipiscing elit.Nulla ultrices nibh eget lacus ultrices fermentum.Cras a volutpat ligula, a. ',
                    date: '2019-01-12'
                },
                {
                    name: 'Chery Warkentin',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat consectetur purus, eget dictum nulla cursus eu. Donec facilisis gravida urna in pretium. Praesent ornare.  ',
                    date: '2019-02-08'
                }
            ],
            counter : 0
        }
    }

    changeCounter = (type , id) =>{
        //Get counter value
        let count =this.state.counter;

        //add or subtract value
        if (type === 'plus'){
            if (count === 2) {
                count = 0;
            } else {
                count++;
            }
        }else{
            if (count === 0) {
                count = 2;
            } else {
                count--;
            }
        }

        //Set up elemets to fade out and in
        const testimonialBox = document.getElementById("testimonial-box");   
        const focusButton = document.getElementById(id);

        //Add fade out to elements
        testimonialBox.classList.add('fadeOut');    
        
        //Remove focus form button
        focusButton.blur();   

        //Wait a 1 min to change artist and fade in 
        setTimeout(() => {
            this.setState({ counter: count });
            testimonialBox.classList.add('fadeIn');            
        }, 1000);

        //Remove all classes after 2 sec
        setTimeout(() => {
            testimonialBox.classList.remove('fadeOut');
            testimonialBox.classList.remove('fadeIn');           
        }, 2000); 
    }

    render(){
        const {testimonials, counter} = this.state;

        return (
            <>
                    <section id='testimonial' className="testimonial">
                        <div className='heading-box'>
                            <h2 className='heading-secondary'>Testimonials</h2>
                        </div>
                        <div id="testimonial-box" className="testimonial__box">
                            <div className="testimonial__description">
                            <p>{testimonials[counter].description}</p>
                            </div>
                            <div className="testimonial__name">
                            <h3 className="heading-tertiary">{testimonials[counter].name}</h3>
                            </div>
                            <div className="testimonial__date">
                                <p>{testimonials[counter].date}</p>
                            </div>
                            <div className="testimonial_btns">
                            <button id="button1" className="btn btn--small btn--animated" onClick={() => this.changeCounter('min','button1')}>
                                    &lsaquo;
                                </button>    
                        <button id="button2" className="btn btn--small btn--animated" onClick={() => this.changeCounter('plus', 'button2')}>
                                    &rsaquo;
                                </button>
                            </div>
                        </div>
                    </section>
            </>
            );        
    }
}

export default Testimonial;