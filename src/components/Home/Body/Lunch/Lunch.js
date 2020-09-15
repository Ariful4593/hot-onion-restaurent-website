import React from 'react';
import foodData from '../../../../foodData/foodData'
import LunchData from './LunchData';

const Lunch = (props) => {
    return (
        <div >
            {
                foodData.map(x => <LunchData food={x} key={x.id} handleFood={props.handleFood}></LunchData>)
            }
        </div>
    );
};

export default Lunch;