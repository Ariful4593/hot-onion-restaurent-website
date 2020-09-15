import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import bannerbackground from '../../../images/bannerbackground.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const cart = props.cart;
    return (
        <div>
            <Navbar>
                <Navbar.Brand>
                    <img style={{ width: '100px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Item>
                    <Link to="/review"><ShoppingCartIcon /><span>{cart.length}</span></Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">Login</Nav.Link>
                    </Nav.Item>
                    <Button variant="contained" color="secondary">
                        Sign up
                    </Button>
                </Navbar.Collapse>
            </Navbar>
            <img style={{ width: '100%' }} src={bannerbackground} alt="" />
        </div>
    );
};

export default Header;