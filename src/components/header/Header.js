import React from 'react';
import Navigation from '../navigation/Navigation';
import '../navigation/navigation.css';
import './header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="container-fluid" style={{
                backgroundImage: `url(${require('../media/hillview.jpg')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat center center fixed',
                height: '100vh',
              }}> 
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <header>           
                                <Navigation />
                                <div className="centered">
                                    <h1>Poduval Hills</h1>    
                                </div>
                            </header>
                        </div>
                    </div>        
                </div>
            </div>        
        );
    }
}


export default Header;