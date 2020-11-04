import React from 'react';

const MenuBar = (props) => {
    const handleMenu = props.handleMenu;
    return (
        <div className="nav justify-content-center mt-5">
            <h2 onClick={() => handleMenu('breakfast') } className={`menu-toggle mr-4 ${props.curCategory === 'breakfast' ? 'text-danger' : ''}`} style={{cursor: 'pointer'}}>Breakfast</h2>
            {/* <button ><h5>Breakfast</h5></button> */}

            <h2 onClick={() => handleMenu('lunch') } className={`menu-toggle mr-4 ${props.curCategory === 'lunch' ? 'text-danger' : ''}`} style={{cursor: 'pointer'}}>Lunch</h2>


            {/* <button ><h5>Lunch</h5></button> */}

            <h2 onClick={() => handleMenu('dinner') } className={`menu-toggle mr-4 ${props.curCategory === 'dinner' ? 'text-danger' : ''}`} style={{cursor: 'pointer'}}>Dinner</h2>
            {/* <button ><h5></h5></button> */}
        </div>
    );
};

export default MenuBar;