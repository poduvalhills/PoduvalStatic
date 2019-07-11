import React from 'react';
//import './contact.css';

class Contact extends React.Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h5>Contact</h5>
                            <a href="mailto:sureshchandramenon@gmail.com" className="mail"><br /><img src={require('./media/gmail.svg')} aria-hidden="true" width="20px" height="20px"/></a> Gmail
                            <br/><br /><a href="#" className="facebook"><img src={require('./media/facebook.svg')} aria-hidden="true"width="20px" height="20px" /></a> Facebook
                            <br /><br />
                            <small><center> &copy; 2019 </center></small>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Contact;