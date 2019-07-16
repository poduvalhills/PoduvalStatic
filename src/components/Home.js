import React from 'react'; 
import Hero from './Hero'; 
import Maps from './Maps'; 
import Gallery from './Gallery';
import Amenities from './Amenities';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Hero />
                <Gallery />
                <Maps />
                <Amenities />
            </div>
        );    
    }
}

export default Home;