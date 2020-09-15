import React from 'react';
import BreakfastData from '../Breakfast/BreakfastData'
import BreakfastFood from '../Breakfast/BreakfastFood'
const Breakfast = () => {
    
    return (
        <div>
            {
                BreakfastData.map(x => <BreakfastFood key={x.id} title={x.title} description={x.description} img={x.img} price={x.price}></BreakfastFood>)
            }
        </div>
    );
};

export default Breakfast;