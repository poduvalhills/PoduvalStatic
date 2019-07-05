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
                                  src={require('./media/1.jpg')}
                                  alt="First slide"
                                  width="1100"
                                  height="500"
                                />
                                <Carousel.Caption>
                                    <h3>Poduval Hill</h3>
                                    <p>Kissed by Rain Drenched Clouds, A green paradise during the monsoon</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/2.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                                <Carousel.Caption>
                                    <h3>Poduval Hill</h3>
                                    <p>Kissed by Rain Drenched Clouds, A green paradise during the monsoon</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/3.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hill</h3>
                                    <p>Kissed by Rain Drenched Clouds, A green paradise during the monsoon</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/4.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hill</h3>
                                    <p>Kissed by Rain Drenched Clouds, A green paradise during the monsoon</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/5.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hill</h3>
                                    <p>Kissed by Rain Drenched Clouds, A green paradise during the monsoon</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/6.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hill</h3>
                                    <p>Kissed by Rain Drenched Clouds, A green paradise during the monsoon</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/7.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hill</h3>
                                    <p>Kissed by Rain Drenched Clouds, A green paradise during the monsoon</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/8.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hill</h3>
                                    <p>Kissed by Rain Drenched Clouds, A green paradise during the monsoon</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/9.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hill</h3>
                                    <p>Kissed by Rain Drenched Clouds, A green paradise during the monsoon</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={require('./media/10.jpg')}
                                  alt="Third slide"
                                  width="1100"
                                  height="500"
                                />
                              <Carousel.Caption>
                                    <h3>Poduval Hill</h3>
                                    <p>Kissed by Rain Drenched Clouds, A green paradise during the monsoon</p>
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