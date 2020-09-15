import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './BreakfastFood.css'
const BreakfastFood = (props) => {
    const title = props.title;
    const description = props.description;
    const img = props.img;
    const price = props.price;
    return (
        <div className='breakFastFood'>

            <Card style={{ width: '18rem', border: 0, textAlign: 'center', marginRight: "20px" }}>
                <Card.Img variant="top" style={{ borderRadius: "360px" }} src={img} />
                <Card.Body>
                    <Card.Title>
                        <Link to="/about">{title}</Link>
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Button variant="contained" color="secondary">
                        Buy Now
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BreakfastFood;