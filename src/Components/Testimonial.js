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

    changeCounter = (type) =>{
        let count =this.state.counter;

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
        console.log(count)
        this.setState({counter:count});
    }
    render(){
        const {testimonials, counter} = this.state;

        return (
            <>
                    <section id='testimonial' className="testimonial">
                        <div className="testimonial__box">
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
                            <button className="btn--small btn--animated" onClick={() => this.changeCounter('min')}>
                                    &lsaquo;
                                </button>    
                            <button className=" btn--small btn--animated" onClick={() => this.changeCounter('plus')}>
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