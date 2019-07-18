import React from 'react';
import './header.css';

class Header extends React.Component{
    render(){
        return(
        <div className="text-center" id="background">
            <img className="img-fluid" src={require('../media/hillview.jpg')} alt="Main Image"/>
            <div className="centered">
                <h1>Poduval Hills</h1>    
            </div>   
        </div>
        );
    }
}


export default Header;