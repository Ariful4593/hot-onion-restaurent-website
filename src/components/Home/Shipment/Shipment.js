import React from 'react';
import Button from '@material-ui/core/Button';

const Shipment = () => {
    return (
        <div>
            <Button variant="contained" color="primary">
                Order More
            </Button>
            <Button variant="contained" color="secondary">
                Place Order
            </Button>
        </div>
    );
};

export default Shipment;