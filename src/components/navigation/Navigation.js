import React from 'react';
import './navigation.css';
import { Navbar,Nav } from 'react-bootstrap';
//import { NavHashLink as NavLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import Jump from 'react-reveal/Jump';

class Navigation extends React.Component{
    
    render(){
        return( 
            <div className="container-fluid" style={{
                backgroundImage: `url(${require('../media/hillview.jpg')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat center center fixed',
                height: '100vh'
              }}>
                  <Jump>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <Navbar expand="lg">
                        <Navbar.Brand><NavLink exact to="/" className="active" style={{color: 'white'}}>Home</NavLink></Navbar.Brand>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto topnav" id="myTopnav">
                                <NavLink exact to="/about">About</NavLink>
                                <NavLink exact to="/gallery">Gallery</NavLink>
                                <NavLink exact to="/video">Videogallery</NavLink>
                                <NavLink exact to="/maps">Maps</NavLink>
                                <NavLink exact to="/amenities">Amenities</NavLink>
                                <NavLink exact to="/plot">Plot</NavLink>
                                <NavLink exact to="/contact">Contact</NavLink>
                            </Nav>
                          </Navbar.Collapse>
                        </Navbar>
                        <div className="align-bottom" style={{display:'flex', justifyContent: 'center'}}>
                            <h1>Poduval Hills</h1>    
                        </div>
                    </div>
                </div>
                </Jump>
            </div>  
            
        );
    }
}


export default Navigation;