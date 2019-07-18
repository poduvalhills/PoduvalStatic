import React from 'react';
import './navigation.css';
import { Navbar,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component{
    
    render(){
        return(   
            <div className="row">
                <div className="col-md-12 text-center">
                    <Navbar expand="lg">
                    <Navbar.Brand><NavLink exact to="/" className="active" style={{color: 'black'}}>Poduval Hills</NavLink></Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto topnav" id="myTopnav">
                            <NavLink exact to="/" className="active">Home</NavLink>
                            <NavLink exact to="/about">About</NavLink>
                            <NavLink exact to="/gallery">Gallery</NavLink>
                            <NavLink exact to="/maps">Maps</NavLink>
                            <NavLink exact to="/amenities">Amenities</NavLink>
                            <NavLink exact to="/plot">Plot</NavLink>
                            <NavLink exact to="/contact">Contact</NavLink>
                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}


export default Navigation;