import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    
    render(){
        return(   
            <div className="row">
                <div className="col-md-12">
                    <div className="topnav" id="myTopnav">
                        <nav>
                            <a href="/" className="active">Home</a>
                            <a href="/about">About</a>
                            <a href="/gallery">Gallery</a>
                            <a href="/maps">Maps</a>
                            <a href="/contact">Contact</a>
                        </nav>  
                    </div>
                </div>
            </div>
        );
    }
}


export default Nav;