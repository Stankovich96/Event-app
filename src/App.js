import React from 'react';
import './Resources/styles.css';
import {Element} from 'react-scroll';

import Header from './components/header_footer/header';
import Featured from './components/featured';
import VenueNfo from './components/VenueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';


function App() {
  return (
    <div className="App" style={{height:"1500px"}}>
     <Header/>

     <Element name="Featured">
      <Featured />
     </Element>

    <Element name="VenueNfo">
      <VenueNfo />
    </Element>

     <Element name="Highlight">
      <Highlight />
     </Element>

     <Element name="Pricing">
      <Pricing />
     </Element>
     
     <Element name="Location">
      <Location />
     </Element>

     <Footer />
    </div>
  ); 
}

export default App;
