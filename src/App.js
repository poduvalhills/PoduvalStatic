import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Maps from './components/Maps';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Home from './components/Home';
import Amenities from './components/Amenities';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="container-fluid">
        <Header />
        <Nav /><br />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={Hero} /> 
            <Route exact path="/gallery" component={Gallery} />      
            <Route exact path="/maps" component={Maps} />
            <Route exact path="/amenities" component={Amenities} />
          </Switch>
          <Contact />
        </div>
      </Router>
    );
  }
}


export default App;
