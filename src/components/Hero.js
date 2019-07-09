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
                        <h2 className="text-center">Poduval Hills</h2><br/>
                        <h6 className="text-center">Situated in Kodai/Palani Hill range at an elevation of about 3000ft surrounded by thousands of acres of reserved forest.</h6> <br/>
                        <h6 className="text-center">Kissed by rain drenched clouds, a green paradise during the monsoon.</h6> <br/>
                        <h6 className="text-center">Misty roads with sun playing hide and seek.</h6> <br/>
                        <h6 className="text-center">Well laid out roads from the foothills to poduval hills.</h6> <br/>
                        <h6 className="text-center">Only 15 kms uphill.</h6> <br/>
                        <h6 className="text-center">You can now own a piece of this Paradise</h6>
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