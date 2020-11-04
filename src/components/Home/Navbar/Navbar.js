import React, { useEffect, useState } from 'react';
import logo from '../../../images/logo2.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    let getData = JSON.parse(localStorage.getItem('userLogin'));
    const [signIn, setSignIn] = useState({
        success: false,
    })
    useEffect(() => {
        if (getData) {
            const newData = { ...signIn };
            newData.success = true;
            setSignIn(newData)
        }

    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{ background: '#fff',}}>
            <Link to="/" className="navbar-brand h1 logo">
                <img src={logo} style={{ height: '40px' }} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={`${signIn.success ? '/' : '/signup'}`} className="nav-link font-weight-bold">
                            {
                                signIn.success ? getData.name : 'SignIn'
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;