import { Button, Card } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'
const Item = (props) => {
    console.log(props.item);
    const handleItem = props.handleItem;
    const { title, name, description, img, price } = props.item;
    return (
        <div className="item-data" onClick={() => handleItem(props.item)}>
            <p>Name: {name}</p>
            <img src={img} alt="" />
            <p>Title: {title}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Item;