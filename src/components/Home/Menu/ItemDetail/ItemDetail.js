import React from 'react';
import { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ItemDetail.css'
const ItemDetail = (props) => {
    const { name, img, price, description, id } = props.currentItem;
    const handleCart = props.handleCart;

    const [counter, setCounter] = useState(1);
    const handleCounter = (count) => {
        const currentCounter = counter;
        var newCounter;
        if (count === '+') {
            newCounter = currentCounter + 1;
        } else {
            newCounter = currentCounter > 1 ? currentCounter - 1 : currentCounter
        }
        setCounter(newCounter);
        const newItem = { ...item };
        newItem.price = newCounter * price;
        newItem.counter = newCounter;
        setItem(newItem);
    }
    const [item, setItem] = useState({
        id: id,
        name: name,
        img: img,
        price: price,
        description: description,
        counter: counter,
    })
    const counterStyle = { cursor: 'pointer', fontSize: '16px', padding: '7px', };
    const counterInputStyle = { width: '40px', height: '35px', padding: '0', margin: '0', textAlign: 'center', borderRadius: '10px' }
    return (
        <Container>
            <Row>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6">
                            <h2>${price * counter}</h2>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 update">
                            <button className="btn btn-danger" type="button">
                                <span className="minus-btn " style={counterStyle} onClick={() => handleCounter('-')}>-</span>
                                <input style={counterInputStyle}  type="text" disabled value={counter} />
                                <span className="plus-btn" style={counterStyle} onClick={() => handleCounter('+')}>+</span>
                            </button>
                        </div>
                    </div>
                    <br/>
                    <Button className="bg-danger" onClick={() => handleCart(item)}><FontAwesomeIcon icon={faShoppingCart} />  Add</Button>

                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <img className="w-100" src={img} alt="" />
                </div>
            </Row>



        </Container>
    );
};

export default ItemDetail;