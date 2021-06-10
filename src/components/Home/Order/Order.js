import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Navbar from '../Navbar/Navbar';
import foodData from '../../../foodData/foodData';
import './Order.css'
import { getDatabaseCart, removeFromDatabaseCart } from '../../../utilities/databaseManager';
import SimpleCardForm from './SimpleCardForm/SimpleCardForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';



const Order = () => {
    const { register, handleSubmit, errors } = useForm();
    const [cart, setCart] = useState([]);
    const [card, setCard] = useState()

    let getData = getDatabaseCart();
    const key = Object.keys(getData);
    const onSubmit = data => {
        if (data && cart && card) {
            fetch('https://infinite-shore-12530.herokuapp.com/addOrder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data, cart, card })
            })
            document.getElementById('orderForm').reset()
            alert("Your order submitted!")
        }else{
            alert("Please fill up all field")
        }
    };
    const totalPrice = cart.reduce((sum, price) => sum + (price.price * price.quantity), 0);
    useEffect(() => {
        const selectedOrder = key.map(existingKey => {
            const food = foodData.find(data => data.id === existingKey)
            food.quantity = getData[existingKey];
            return food;
        })
        setCart(selectedOrder)
    }, [getData, key])

    const loggedInUser = JSON.parse(localStorage.getItem('userLogin'));

    const removeOrder = (key) => {
        const newCart = cart.filter(order => order.id !== key);
        setCart(newCart);
        removeFromDatabaseCart(key);
    }

    const stripePromise = loadStripe('pk_test_51HZp7VIFvbZO7xjYzMuCl9Dg8ITpUsSOwQX6LSfH45broJINKMrTNjw0Ls4TvaruUP9P94xnOO3fX3pXcQeJ1mkp00YyPWDvqq');

    const cardData = (cardInfo) => {
        setCard(cardInfo)
    }

    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Row>
                    <Col className="col-sm-12 col-md-6 col-lg-5 col-12">
                        <form id="orderForm" onSubmit={handleSubmit(onSubmit)} className="ship-form">
                            {/* <input name="example" defaultValue="test" ref={register} /> */}
                            <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                            {errors.name && <span className="error">Name is required</span>}

                            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                            {errors.email && <span className="error">Email is required</span>}

                            <input name="address" ref={register({ required: true })} placeholder="Your Address" />
                            {errors.name && <span className="error">Address is required</span>}

                            <input name="phone" ref={register({ required: true })} placeholder="Phone Number" />
                            {errors.phone && <span className="error">Phone Number is required</span>}

                            <input type="submit" />
                        </form>
                    </Col>
                    <Col className="col-md-6 col-lg-6 col-12 col">
                        <p>From Muradpur, Chittagong</p>
                        <p>Arriving in 20-30 minutes</p>
                        <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
                        {
                            cart.map(item => {
                                return <Row style={{ background: 'lightgrey', borderRadius: '10px', marginBottom: '10px' }} key={item.id}>
                                    <Col className="col-3">
                                        <img style={{ width: '100%', borderRadius: '360px' }} src={item.img} alt="" />
                                    </Col>
                                    <Col className="col-5">
                                        <h6>{item.name}</h6>
                                        <p>${item.price * item.quantity}</p>
                                        
                                    </Col>
                                    <Col className="col-3 text-right d-flex align-items-center">
                                        <input style={{ width: '40px', borderRadius: '5px', height: '38px', margin: '0' }} type="text" disabled value={item.quantity} />
                                        <Button className="ml-2 btn btn-danger" onClick={() => removeOrder(item.id)}>X</Button>
                                    </Col>
                                </Row>
                            })
                        }
                        <Elements stripe={stripePromise}>
                            <SimpleCardForm cardData={cardData}></SimpleCardForm>
                        </Elements>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Order;