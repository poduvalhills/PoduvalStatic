import React from 'react';
import { Card } from 'react-bootstrap';
import './maps.css';
import Bounce from 'react-reveal/Bounce';

class Maps extends React.Component{
    render(){
        return(
            <div className="container">
                <Bounce left>
                <div className="row">
                    <div className="col-md-6 img-fluid">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=10%C2%B021'39.3%22N%2077%C2%B046'10.5%22E&t=&z=9&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 justify-content-center"><br />
                        <Card>
                          <Card.Header as="h5" className="text-center">Access the Nature</Card.Header>
                          <Card.Body>
                            <Card.Title className="text-center">Roadways</Card.Title>
                            <Card.Text>
                              41 Kms from Dindigul via Dharmathupatti and the Uphill climb is ony 14 Kms
                            </Card.Text>
                            <Card.Title className="text-center">Railways</Card.Title>
                            <Card.Text>
                              The Closest Railway station is in Dindigul which has direct trains from Chennai
                            </Card.Text>
                            <Card.Title className="text-center">Airways</Card.Title>
                            <Card.Text>
                              Madurai International Airport is the closest airport which is at 2 hrs drive away
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr/>
                    </div>
                </div>
                </Bounce>
            </div>
        );
    }
}

export default Maps