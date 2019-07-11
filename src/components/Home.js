import React from 'react'; 
import Hero from './Hero'; 
import Maps from './Maps'; 
import Gallery from './Gallery';


class Home extends React.Component{
    render(){
        return(
            <div>
                <Hero />
                <Gallery />
                <Maps />
            </div>
        );    
    }
}

export default Home;