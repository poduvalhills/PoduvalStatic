import React from 'react';
import Fade from 'react-reveal/Fade';

class Videogallery extends React.Component{
    render(){
        return(
            <div>
                <div className="row" id="videos">
                    <Fade left>
                        <div className="col-md-4 text-center">
                            <video width="400" controls>
                              <source src={require('/media/checkdam.mp4')} type="video/mp4" />
                              Your browser does not support HTML5 video.
                            </video>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="col-md-4 text-center">
                            <video width="400" controls>
                              <source src={require('/media/hills.mp4')} type="video/mp4" />
                              Your browser does not support HTML5 video.
                            </video>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="col-md-4 text-center">
                            <video width="400" controls>
                              <source src={require('/media/views.mp4')} type="video/mp4" />
                              Your browser does not support HTML5 video.
                            </video>
                        </div>
                    </Fade>
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
