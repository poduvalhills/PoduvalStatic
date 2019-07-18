import React from 'react';
//import './contact.css';
import { MdPhoneInTalk } from "react-icons/md";

class Contact extends React.Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h5>Contact</h5>
                            <h6>Suresh Chandra Menon - <MdPhoneInTalk /> 9884126646 </h6>   
                            <small><center> &copy; 2019 </center></small>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Contact;