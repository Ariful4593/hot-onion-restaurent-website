import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../../utilities/databaseManager';
import ReviewData from './ReviewData';
import foodData from '../../../foodData/foodData'

const Review = () => {
    const [reviewcart, setReviewCart] = useState([]);
    const handleRemoveProduct = (productKey) =>{
        console.log("Clicked Removed",productKey);
        const newCart = reviewcart.filter(fd => fd.id !== productKey);
        setReviewCart(newCart);
        removeFromDatabaseCart(productKey)
    }
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const foodKey = Object.keys(saveCart);
        const cartFoods = foodKey.map(id => {
            const item = foodData.find(fd => fd.id === id);
            item.quantity = saveCart[id]
            return item;
        });
        setReviewCart(cartFoods)
        console.log(cartFoods)
        
    },[])
    return (
        <div>
            <h1>Count{reviewcart.length}</h1>
            {
                reviewcart.map(x => <ReviewData foodItem={x} key={x.id} handleRemoveProduct={handleRemoveProduct}></ReviewData>)
            } 
        </div>
    );
};

export default Review;