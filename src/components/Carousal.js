import React from 'react';
//import './carousal.css';
import { Carousel } from 'react-bootstrap';
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
                                  width="1100"
                                  height="500"
                                />
                                <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>The Entrance to Poduval Hills Natural and Beautiful</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/parking.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                                <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>Tall trees and breath of freshness continue in the parking area</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/view.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>The amazing view from Poduval Hills, right across the valley green and beautiful</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/clouds.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>Every moment a new dance from the moist clouds</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/brook.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>A Gurgling steam runs through the property.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/rocks.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>Through rocks and trees the music plays...</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/pool.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>The stream has its own natural swimming pool</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/water.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>Crystal clear water in the midst of trees.. It's Heaven</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/area.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>A lovely area for one to enjoy a Book or Paint or just soak in Nature</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/mist.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>Long walks through the mist laden trees</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/visit.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>Amazing landscape when the clouds decide to pay a visit</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/breakfast.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>Morning breakfast or lunch on these rocks with chirping of birds for company?</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/flower.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hills</h3>
                                    <p>The soil is very fertile with Lemon, Coffee, Jackfruit, Pepper and an amazing variety of flowers already growing</p>
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