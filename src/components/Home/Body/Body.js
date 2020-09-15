import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";
import BodyHeader from './BodyHeader/BodyHeader';
import Foodbody from './BodyHeader/Foodbody/Foodbody';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import Lunch from './Lunch/Lunch';
import Choose from '../Body/Choose/Choose';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { createContext } from 'react';
import Signup from './Signup/Signup';
import { Select } from '@material-ui/core';

const Body = (props) => {
    const [checkout, setCheckOut] = useState({
        isOrder: false,
    })
    return (
        <div>
            <Router>
                <BodyHeader></BodyHeader>
                <Switch>
                    <Route path="/breakfast">
                        <Breakfast></Breakfast>
                    </Route>
                    <Route exact path="/">
                        <Lunch handleFood={props.handleFood} ></Lunch>
                    </Route>
                    <Route path="/lunch">
                        <Lunch handleFood={props.handleFood} ></Lunch>
                    </Route>
                    <Route path="/dinner">
                        <Dinner></Dinner>
                    </Route>
                    <Route path="/signup">
                        <Signup></Signup>
                    </Route>
                    <Route path="/select">
                        <Select></Select>
                    </Route>
                    <Route path="/item/:id">
                        <Foodbody handleFood={props.handleFood} checkout={[checkout,setCheckOut]}></Foodbody>
                    </Route>
                </Switch>
            </Router>
            {
                checkout.isOrder && <Link to="/signup"><div style={{ textAlign: "center", marginTop: '20px' }}><Button variant="contained" color="secondary">
                    Checkeout Your Food
            </Button></div></Link>
            }


            <h2>Why you choose us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, praesentium.</p>
            <Choose></Choose>
        </div>
    );
};

export default Body;