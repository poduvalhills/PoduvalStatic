import React from 'react';
import './maps.css';

class Maps extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 img-fluid">
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=10%C2%B021'39.3%22N%2077%C2%B046'10.5%22E&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 justify-content-center"> <br/><br/>
                        <h2 className="text-center">Poduval Hills</h2><br/>
                        <h2 className="text-center">Connect to the Nature</h2>
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

export default Maps