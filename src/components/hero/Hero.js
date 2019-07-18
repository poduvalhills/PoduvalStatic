import React from 'react';
import './herostyle.css';
import { WiMeteor } from "react-icons/wi";

class Hero extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 hotspot-wrapper" style={{overflow: 'hidden'}} ><br /> <br />
                        <img src={require('../media/heroalt.jpg')} className="img-fluid" alt="hero" />
                    </div>
                    <div className="col-md-6"><br /><br />
                        <h2 className=" text-center">Poduval Hills</h2><br/>
                        <ul style={{listStyleType:"none"}}>
                            <li><WiMeteor />  Situated in Kodai/Palani Hill range at an elevation of about 3000ft surrounded by thousands of acres of reserved forest.</li><br />
                            <li><WiMeteor />  Kissed by rain drenched clouds, a green paradise during the monsoon.</li><br />
                            <li><WiMeteor />  Misty roads with sun playing hide and seek.</li><br />
                            <li><WiMeteor />  Well laid out roads from the foothills to poduval hills.</li><br />
                            <li><WiMeteor />  Only 15 kms uphill.</li><br />
                            <li><WiMeteor />  You can now own a piece of this Paradise</li>
                        </ul>
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