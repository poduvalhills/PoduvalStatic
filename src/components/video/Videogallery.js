import React from 'react';
import Fade from 'react-reveal/Fade';

class Videogallery extends React.Component{
    render(){
        return(
            <div>
                <div className="row" id="videos">
                    <div className="col-md-4 text-center">
                            <video width="400" controls style="display:none">                              
                              <source src={require('../media/checkdam.mp4')} type="video/mp4" />
                              <source src="https://www.poduvalhills.com/static/media/checkdam.mp4" type="video/mp4" />
                              Your browser does not support HTML5 video.
                            </video>                            
                    </div>
                    <div className="col-md-4 text-center">
                        <video width="400" controls style="display:none">                              
                          <source src={require('../media/hills.mp4')} type="video/mp4" />
                          <source src="https://www.poduvalhills.com/static/media/hills.mp4" type="video/mp4" />
                          Your browser does not support HTML5 video.
                        </video>                            
                    </div>
                    <div className="col-md-4 text-center">
                        <video width="400" controls style="display:none">                              
                          <source src={require('../media/views.mp4')} type="video/mp4" />
                          <source src="https://www.poduvalhills.com/static/media/views.mp4" type="video/mp4" />
                          Your browser does not support HTML5 video.
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
