import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import './Footer.css'
const Footer = () => {
    return (
        <div className="container mw-100  footer" >
            <div className="row">
                <div className="col-md-6 mt-4 ">
                    <img style={{width: '100px'}} src={logo} alt="" />
                </div>
                <div className="col-md-3 mt-4">
                    <ul>
                        <li><Link to='/'>About Online Food</Link></li>
                        <li><Link to='/'>Read Our Blog</Link> </li>
                        <li><Link to='/'>Sign Up For Delivery</Link> </li>
                        <li><Link to='/'>Add Your Restsurent</Link> </li>
                    </ul>
                </div>
                <div className="col-md-3 mt-4">
                <ul>
                        <li><Link to='/'>Get Help</Link> </li>
                        <li><Link to='/'>Read FAQs</Link> </li>
                        <li><Link to='/'>View All Cities</Link> </li>
                        <li><Link to='/'>Restaurent Near Me</Link> </li>
                    </ul>
                </div>
            </div>
            <p className="text-center m-0 p-4">Copyright © 2020 Red Onion Foods</p>
        </div>
    );
};

export default Footer;