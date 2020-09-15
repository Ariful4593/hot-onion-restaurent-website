import React from 'react';
import { Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import './Lunch.css'
import { Link } from 'react-router-dom';
const LunchData = (props) => {
    const { title, description, img, price, id } = props.food;
    const handleFood = props.handleFood;
    return (
        <div className="lunchData">
            <Link to={`/item/${id}`}>
                <Card style={{ width: '18rem', border: 0, textAlign: 'center', marginRight: "20px" }}>
                    <Card.Img variant="top" style={{ borderRadius: "360px" }} src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            ${price}
                        </Card.Text>
                        <Button variant="contained" onClick={() => handleFood(props.food)} color="secondary">
                            Buy Now
                    </Button>
                    </Card.Body>
                </Card>
            </Link>

        </div>
    );
};

export default LunchData;