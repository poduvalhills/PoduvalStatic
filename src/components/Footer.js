import React from 'react';
//import './footer.css';
import './herostyle.css';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h5>Contact</h5>
                            <a href="mailto:sureshchandramenon@gmail.com" className="mail"><br /><img src={require('./media/gmail.svg')} aria-hidden="true" width="20" height="20" /></a> Gmail
                            <br/><br /><a href="#" className="facebook"><img src={require('./media/facebook.svg')} aria-hidden="true" width="20" height="20" /></a> Facebook
                            <br /><br />
                            <small><center> &copy; 2019 </center></small>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;