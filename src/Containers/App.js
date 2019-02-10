import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import About from '../Components/About';
import Features from '../Components/Features';
import Artist from '../Components/Artist';
import Testimonial from '../Components/Testimonial';
import Gallery from '../Components/Gallery';
import Servecis from '../Components/Services';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/> 
        <Header />
        <About />
        <Features/>
        <Artist />
        <Testimonial/>
        <Gallery/>
        <Servecis/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
