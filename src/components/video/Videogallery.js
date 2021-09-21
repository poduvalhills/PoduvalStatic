import React from 'react';
//import Fade from 'react-reveal/Fade';

class Videogallery extends React.Component{
    render(){
        return(
            <div>
                <div className="row" id="videos">
                    <div className="col-md-4 text-center">
                            <video width="400" controls style="display:none">                              
                              <source src={require('../media/checkdam.mp4')} type="video/mp4" />
                            </video>
                            <video width="400" controls>                              
                              <source src="https://www.maxsee.in/poduvalhills/checkdam.mp4" type="video/mp4" />
                            </video>                                                     
                    </div>
                    <div className="col-md-4 text-center">
                        <video width="400" controls style="display:none">                              
                          <source src={require('../media/hills.mp4')} type="video/mp4" />
                        </video>  
                        <video width="400" controls>                              
                           <source src="https://www.maxsee.in/poduvalhills/hills.mp4" type="video/mp4" />
                        </video> 
                    </div>
                    <div className="col-md-4 text-center">
                        <video width="400" controls style="display:none">                              
                          <source src={require('../media/views.mp4')} type="video/mp4" />
                        </video>
                        <video width="400" controls>                              
                           <source src="https://www.maxsee.in/poduvalhills/views.mp4" type="video/mp4" />
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
