import React from 'react';
//import Fade from 'react-reveal/Fade';

class Videogallery extends React.Component{
    render(){
        return(
            <div>
                <div className="row" id="videos">
                    <div className="col-md-4 text-center">            
                               <video width="400" height="250" controls>                              
                              <source src="https://www.maxsee.in/poduvalhills/1.mp4" type="video/mp4" />
                            </video>
                    </div>
                    <div className="col-md-4 text-center">
                        <video width="400" height="250" controls>                              
                           <source src="https://www.maxsee.in/poduvalhills/2.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-md-4 text-center">
                         <video width="400" height="250" controls>                              
                           <source src="https://www.maxsee.in/poduvalhills/3.mp4" type="video/mp4" />
                        </video>
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
