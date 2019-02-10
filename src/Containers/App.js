import React, { Component } from 'react';
import Header from '../Components/Header';
import About from '../Components/About';
import Features from '../Components/Features';
import Artist from '../Components/Artist';
import Testimonial from '../Components/Testimonial';
import Gallery from '../Components/Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Features/>
        <Artist />
        <Testimonial/>
        <Gallery/>
      </div>
    );
  }
}

export default App;
