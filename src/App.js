import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './components/Home/Review/Review';
import { useState } from 'react';
import { addToDatabaseCart } from './utilities/databaseManager';
import { createContext } from 'react';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import Shipment from './components/Home/Shipment/Shipment';
import Signup from './components/Home/Signup/Signup';
import Order from './components/Home/Order/Order';
export const UserContextName = createContext()

function App() {
  const [cart, setCart] = useState([])
  
  const handleFood = (food) => {
    console.log("Product Added", food);
    const newCart = [...cart, food];
    setCart(newCart);
    const sameFood = newCart.filter(fd => fd.id === food.id);
    const count = sameFood.length;
    addToDatabaseCart(food.id, count)
  }

  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContextName.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home cart={cart} handleFood={handleFood}></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/review">
            <Review cart={cart}></Review>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/order">
            <Order></Order>
          </Route>
        </Switch>
      </Router>

    </UserContextName.Provider>
  );
}

export default App;
