import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Gallery from './components/gallery/Gallery';
import Maps from './components/maps/Maps';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Amenities from './components/amenities/Amenities';
import Plot from './components/plot/Plot';
//import Test from './components/test/Test';
import Videogallery from './components/video/Videogallery';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="container-fluid">  
        { /* <Header /> */ }
        <Navigation />
        <br />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={Hero} /> 
            <Route exact path="/gallery" component={Gallery} />      
            <Route exact path="/video" component={Videogallery} />
            <Route exact path="/maps" component={Maps} />
            <Route exact path="/amenities" component={Amenities} />
            <Route exact path="/plot" component={Plot} />
            { /*<Route exact path="/test" component={Test} />*/ }
          </Switch>
          <Contact />
        </div>
      </Router>
    );
  }
}


export default App;
