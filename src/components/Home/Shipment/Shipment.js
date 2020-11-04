import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Shipment.css'
const Shipment = () => {
    return (
        <div className="shipment d-flex justify-content-center">
            <div className="row d-flex align-items-center">
                <Link to="/" className="mr-4">
                    <Button variant="contained" color="primary">
                        Order More
                </Button>
                </Link>

                <Link to="order">
                    <Button variant="contained" color="secondary">
                        Place Order
                </Button>
                </Link>
            </div>


        </div>
    );
};

export default Shipment;