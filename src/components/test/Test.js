import React from 'react';
import Navigation from '../navigation/Navigation';

class Test extends React.Component{
    render(){
        return(
            <div className="container" style={{
                backgroundImage: `url(${require('../media/hillview.jpg')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}>
                <div className="row">
                    <div className="col-md-12">
                    <header>           
                        <div className=".cen">
                            <Navigation />
                            <h1>Poduval Hills</h1>    
                        </div>
                    </header>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;