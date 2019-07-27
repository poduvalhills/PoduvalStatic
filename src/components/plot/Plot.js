import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import { WiMeteor } from "react-icons/wi";
import Slide from 'react-reveal/Slide';
//import './plot.css';

//`url(${src})`
//const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'
class Plot extends React.Component{
    //constructor(){
    //    super()
    //    this.state={
    //        backgroundImage: `url(${src})`,
    //        backgroundPosition: '0% 0%'
    //    }
    //    this.handleMouseMove = this.handleMouseMove.bind(this)
    //}
    //handleMouseMove = e => {
    //    const { left, top, width, height } = e.target.getBoundingClientRect()
    //    const x = (e.pageX - left) / width * 100
    //    const y = (e.pageY - top) / height * 100
    //    this.setState({ backgroundPosition: `${x}% ${y}%` })
    //}
    render(){
        return(  
            <div className="container-fluid" id="plot">
                <Slide left>
                <div className="row">
                    <div className="col-md-6 text-center">
                        {/*<figure onMouseMove={this.handleMouseMove} style={this.state}>
                            <img id="zoom" src={src} />
                        </figure>*/}
                        <InnerImageZoom src={require('../media/plot.jpg')} />
                    </div>
                    <div className="col-md-6"><br />
                        <h3 className="text-center">Plot Description</h3><br />
                        <ul style={{listStyleType:"none"}}>
                            <li><WiMeteor />The total area of the Poduval hills is almost 100 Acres</li><br />
                            <li><WiMeteor />All the land for sale is patta land</li><br />
                            <li><WiMeteor />Plots of 1 acre upwards is available for sale</li><br />
                            <li><WiMeteor />Each 1 Acre plot has lots of trees including Teak, Silver oak, Jack Fruit, Coffee, Lemon, etc</li><br />
                            <li><WiMeteor />Each Plot has an internal road frontage</li><br />
                            <li><WiMeteor />There are Premium plots over looking the valley and also alongside the stream that runs through the property</li><br />
                            <li><WiMeteor />Contact us for more details</li>
                        </ul>
                    </div>
                </div><hr/>
                </Slide>
            </div>
        );
    }
}

export default Plot;