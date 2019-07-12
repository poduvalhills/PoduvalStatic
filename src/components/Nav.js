import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom'

class Nav extends React.Component{
    
    render(){
        return(   
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="topnav" id="myTopnav">
                        <nav>
                            <NavLink exact to="/" className="active">Home</NavLink>
                            <NavLink exact to="/about">About</NavLink>
                            <NavLink exact to="/gallery">Gallery</NavLink>                            
                            <NavLink exact to="/maps">Maps</NavLink>
                            <NavLink exact to="/contact">Contact</NavLink>
                        </nav>  
                    </div>
                </div>
            </div>
        );
    }
}


export default Nav;