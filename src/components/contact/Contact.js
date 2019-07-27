import React from 'react';
//import './contact.css';
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import Jump from 'react-reveal/Jump';

class Contact extends React.Component{
    render(){
        return(
            <footer>
                <div id="contact">
                    <Jump>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h5>Contact</h5><br/>
                            <h6>Poduval - <MdPhoneInTalk /> 9884478888 </h6> 
                            <h6>Muthuswamy Chandran - <MdPhoneInTalk /> 9042058212 </h6>
                            <h6>Suresh Chandra Menon - <MdPhoneInTalk /> 9884126646 </h6>
                            <h6>E-Mail - <a href="mailto:poduvalhills@gmail.com" style={{color: 'black'}}><MdEmail /></a> poduvalhills@gmail.com </h6><br/>   
                            <small><center> &copy; 2019 </center></small>
                        </div>
                    </div>
                    </Jump>
                </div>
            </footer>
        );
    }
}

export default Contact;