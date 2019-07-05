import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousal from './components/Carousal';
import Maps from './components/Maps';
import Footer from './components/Footer';

class App extends React.Component{
  render(){
    return(
      <div className="root">
        <Header />
        <Hero />
        <Carousal />      
        <Maps />
        <Footer />
      </div>
    );
  }
}


export default App;
