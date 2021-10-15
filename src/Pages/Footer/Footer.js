import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faMapMarked, faPhone} from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (

        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Car Repairing <span> Services</span></h3>

                     <p className="footer-links">
                    <Link to="/home">Home</Link>

                    {/* <Link to="/about">About</Link> */}

                    <Link to="/service">Service</Link>
                    {/* <Link to="/founders">Founder</Link> */}
      
                    </p> 

                    <p className="footer-company-name">Company Name © 2015</p>
                </div>

                <div className="footer-center">

                    <div >
                    {/* <FontAwesomeIcon className="icon" icon={ faMapMarked} size = '2x' /> */}
                        <p className="d-inline-block"><span>Marine Dr, Broadstairs CT10 3LG, United Kingdom</span> Botany Bay, London</p>
                    </div>

                    <div >
                    {/* <FontAwesomeIcon className="icon" icon={faPhone} size = '2x' /> */}
                        <p>+5.444.444.4444</p>
                    </div>

                    <div >
                    {/* <FontAwesomeIcon className="icon" icon={faEnvelope} size = '2x' /> */}
                    <p><a href="mailto:support@company.com">support@company.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About Us</span>
                        We are frequently asked this question in the course of a crash investigation. The answer is not always simple and depends on a number of factors including, why the vehicle was being serviced, what specific work the vehicle.
                    </p>

                    {/* <div className="footer-icons">
                    <FontAwesomeIcon className="icon" icon={faFacebook} size = '3x' />
                    <FontAwesomeIcon className="icon"  icon={faInstagram} size = '3x' />
                    <FontAwesomeIcon className="icon"  icon={faLinkedinIn} size = '3x' />
                    
                    </div> */}
                </div>

            </footer>
        </div>
    );
};

export default Footer;