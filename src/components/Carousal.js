import React from 'react';
import './carousal.css';
import { Carousel, Row } from 'react-bootstrap';
//import { Image } from 'react-bootstrap';


class Carousal extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/entrance.jpg')}
                                  alt="First slide"                                 
                                />
                                <Carousel.Caption>
                                  <p>The Entrance to Poduval Hills Natural and Beautiful</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/parking.jpg')}
                                  alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <p>Tall trees and breath of freshness in the parking area</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/view.jpg')}
                                  alt="Third slide"
                                />
                              <Carousel.Caption>
                                    <p>The amazing view from Poduval Hills, across the valley</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/clouds.jpg')}
                                  alt="Third slide"
                                />
                              <Carousel.Caption>
                                    <p>Every moment a new dance from the moist clouds</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/brook.jpg')}
                                  alt="Third slide"
                                />
                              <Carousel.Caption>
                                    <p>A Gurgling steam runs through the property.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/rocks.jpg')}
                                  alt="Third slide"
                                />
                              <Carousel.Caption>
                                    <p>Through rocks and trees the music plays</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/pool.jpg')}
                                  alt="Third slide"
                                />
                              <Carousel.Caption>
                                    <p>The stream has its own natural swimming pool</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/water.jpg')}
                                  alt="Third slide"
                                />
                              <Carousel.Caption>
                                    <p>Crystal clear water in the midst of trees</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/area.jpg')}
                                  alt="Third slide"
                                />
                              <Carousel.Caption>
                                    <p>A lovely area for one to enjoy a Book, soak in Nature</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/mist.jpg')}
                                  alt="Third slide"
                                />
                              <Carousel.Caption>
                                    <p>Long walks through the mist laden trees</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/visit.jpg')}
                                  alt="Third slide"
                                />
                              <Carousel.Caption>
                                    <p>Amazing landscape when the clouds come to visit</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/breakfast.jpg')}
                                  alt="Third slide"
                                />
                              <Carousel.Caption>
                                    <p>Breakfast on these rocks amidst the chirping of birds</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/flower.jpg')}
                                  alt="Third slide"
                                />
                              <Carousel.Caption>
                                    <p>Fertile soil with Lemon, Coffee, Jackfruit, Pepper</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
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

export default Carousal;