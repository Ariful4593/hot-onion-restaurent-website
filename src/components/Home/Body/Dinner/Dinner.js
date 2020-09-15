import React from 'react';
import DinnerData from '../Dinner/DinnerData';
import DinnerFoods from '../Dinner/DinnerFoods';

const Dinner = () => {
    return (
        
        <div>
            {
                
                DinnerData.map(x => <DinnerFoods key={x.id} title={x.title} description={x.description} img={x.img} price={x.price}></DinnerFoods>)
            }
        </div>
    );
};

export default Dinner;