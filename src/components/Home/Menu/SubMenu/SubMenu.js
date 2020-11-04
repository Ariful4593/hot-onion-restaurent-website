import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { getUser } from '../../../../utilities/databaseManager';
import './Submenu.css'
const SubMenu = (props) => {
    const currentMenu = props.currentMenu;
    const handleItem = props.handleItem;
    const userId = getUser();
    const getUserId = JSON.parse(localStorage.getItem(`emaJohn/carts/${userId}`));
    const getData = JSON.parse(localStorage.getItem('userLogin'));
    const history = useHistory()
    const handleCheckout = () => {
        history.push(`${getData === null ? '/signup' : '/shipment'}`);
    }
    return (
        <div className="row mt-5 w-100">
            {
                currentMenu.map(item => {
                    return (
                        <div onClick={() => handleItem(item)} key={item.id} className="col-xl-4 text-center p-4 sub-data">
                            <img src={item.img} className="w-50" alt="" />
                            <h5 className="mt-4">{item.name}</h5>
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                        </div>
                    )
                })
            }
            {
                getUserId === null ?
                    '' : <div style={{ margin: '0 auto', }}>
                        <Button variant="contained" color="secondary" className="mb-4 mt-5" onClick={handleCheckout}>
                            Checkeout Your Food
                        </Button>
                    </div>
            }
        </div>
    );
};

export default SubMenu;