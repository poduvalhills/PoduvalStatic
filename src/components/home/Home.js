import React from 'react'; 
import Hero from '../hero/Hero';
import Gallery from '../gallery/Gallery';
import Maps from '../maps/Maps';
import Amenities from '../amenities/Amenities';
import Plot from '../plot/Plot';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Hero />
                <Gallery />
                <Maps />
                <Amenities />
                <Plot />
            </div>
        );    
    }
}

export default Home;