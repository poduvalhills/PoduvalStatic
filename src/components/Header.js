import React from 'react';
import './header.css';

class Header extends React.Component{
    render(){
        return(
        <div id="background" className="jumbotron text-center">
            <h1 style={{fontSize: '150px'}}>Poduval Hills</h1>
        </div>
        
        );
    }
}


export default Header;