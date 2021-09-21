import React from 'react';
//import Fade from 'react-reveal/Fade';

class Videogallery extends React.Component{
    render(){
        return(
            <div>
                <div className="row" id="videos">
                    <div className="col-md-4 text-center">            
                              <iframe width="560" height="315" src="https://www.youtube.com/embed/0Xomygmb3U0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                                  
                    </div>
                    <div className="col-md-4 text-center">
                        
                    </div>
                    <div className="col-md-4 text-center">
                         
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

export default Videogallery;
