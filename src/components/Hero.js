import React from 'react';
import './herostyle.css';

class Hero extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 hotspot-wrapper" style={{overflow: 'hidden'}} >
                        <img src={require('./media/heroalt.jpg')}  class="img-fluid" alt="hero" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center">Poduval Hills</h2>
                            <p className="text-center">
                                Situated in Kodai/Palani Hill range at an elevation of about 3000ft surounded by thousands of acres of reserved forest.   
                            </p>
                        
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;