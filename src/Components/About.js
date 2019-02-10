import React from 'react';
import about1 from '../img/about-1.jpg';
import about2 from "../img/about-2.jpg";
import about3 from "../img/about-3.jpg";
import about4 from "../img/about-4.jpg";

const About = () => {
    return (
      <>
        <section id="about" className="about">
          <div className="about__text">
            <h2 className="heading-secondary">Welcome Tattoo Studio</h2>

            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corporis vitae nihil inventore similique laudantium unde quo
              esse sint.
            </p>
            <h3 className="heading-tertiary">About us</h3>
            <p className="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corporis totam fugiat rem accusantium soluta delectus
              repudiandae, ad cum! Fuga corporis debitis maiores laudantium
              dolorem modi distinctio dolores repudiandae voluptates odio!
            </p>
            <a href="#features" class="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="about__pictures">
            <img
              src={about1}
              alt="Man Sleave"
              className="about__img about__img--1"
            />
            <img
              src={about2}
              alt="Woman Sleave"
              className="about__img about__img--2"
            />
            <img
              src={about3}
              alt="Arm lion"
              className="about__img about__img--3"
            />
            <img
              src={about4}
              alt="Half sleve"
              className="about__img about__img--4"
            />
          </div>
        </section>
      </>
    );
}

export default About;