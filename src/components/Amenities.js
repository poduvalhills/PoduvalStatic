import React from 'react';
import {Card, CardDeck } from 'react-bootstrap';

class Amenities extends React.Component{
    render(){
        return(
            <div className="container">
                <div clssName="row">
                    <CardDeck>
                        <div className="col-md-3">
                            <Card>
                                <Card.Img variant="top" src={require('./media/roads.jpg')} />
                                <Card.Body>
                                    <Card.Title>Roads</Card.Title>
                                    <Card.Text>
                                        Well layed road from Foothills to Poduval Hills which is just 15 Kms away.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card>
                                <Card.Img variant="top" src={require('./media/railway.jpg')} />
                                <Card.Body>
                                    <Card.Title>Rail</Card.Title>
                                    <Card.Text>
                                        We have Dindigul Railway station nearby through which we can access almost all the cities in India
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card>
                                <Card.Img variant="top" src={require('./media/amenities.jpg')} height="200" width="150"/>
                                <Card.Body>
                                    <Card.Title>Amenities</Card.Title>
                                    <Card.Text>
                                        Uninterrupted Mobile Network, Water and Power Supply with other amenities like Schools, Hospitals, Police Stations nearby.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card>
                                <Card.Img variant="top" src={require('./media/financial.jpg')} />
                                <Card.Body>
                                    <Card.Title>Financial Help</Card.Title>
                                    <Card.Text>
                                        Contact: - Phone Number and other details -
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </CardDeck><br />
                </div> <hr />   
            </div>     
        );
    }
}

export default Amenities;