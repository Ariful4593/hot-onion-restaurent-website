import React from 'react';
import { Button, Col, Container, FormControl, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import foodData from '../../../../../foodData/foodData';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../Body';

const Foodbody = (props) => {
    const [checkout,setCheckOut] = props.checkout;
    
    const test = () =>{
        const newUser = {...checkout};
        newUser.isOrder = true;
        setCheckOut(newUser)
    }
    let { id } = useParams()
    const data = foodData.find(fd => fd.id === id);
    const { title, description, img, price } = data;
    const [qty, setQty] = useState(1);
    const minus = () => {
        if (qty != 1) {
            setQty(qty - 1)
        }
    }

    return (
        <div >
            <Container>
                <Row>
                    <Col>
                        <h1>{title}</h1><br />
                        <p>{description}</p>
                        <Row>
                            <Col>
                                <h1><p>${price * qty}</p></h1>
                            </Col>
                            <Button onClick={minus}><RemoveIcon /></Button>
                            <FormControl value={qty} style={{ width: '40px' }} />
                            <Button onClick={() => setQty(qty + 1)}><AddIcon /></Button>
                        </Row>
                        <Button variant="danger" onClick={test}>Add</Button>
                    </Col>
                    <Col>
                        <img src={img} alt="" />
                    </Col>
                </Row>
            </Container>

            {/* <Card.Title>{title}</Card.Title> */}
            {/* <Card style={{ width: '18rem', border: 0, textAlign: 'center', marginRight: "20px" }}>
                <Card.Img variant="top" style={{ borderRadius: "360px" }} src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Button variant="contained" onClick={() => handleFood(data)} color="secondary">
                        Buy Now
                    </Button>
                </Card.Body>
            </Card> */}

        </div>
    );
};

export default Foodbody;