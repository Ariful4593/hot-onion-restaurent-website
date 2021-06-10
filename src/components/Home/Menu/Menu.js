import React, { useState } from 'react';
import { useEffect } from 'react';
import foodData from '../../../foodData/foodData';
import { addToDatabaseCart } from '../../../utilities/databaseManager';
import ItemDetail from './ItemDetail/ItemDetail';
import MenuBar from './MenuBar/MenuBar';
import SubMenu from './SubMenu/SubMenu';

const Menu = () => {
    // eslint-disable-next-line no-unused-vars
    const [fullMenu, setFullmenu] = useState([]);
    const [currentMenu, setCurrentMenu] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);
    const [curCategory, setCurrentCategory] = useState('');
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const data = foodData;
        setFullmenu(data);
        setCurrentCategory('lunch')
    }, [])

    const handleMenu = (submenu) => {
        setCurrentCategory(submenu);
        setCurrentItem(null);

    }

    useEffect(() => {
        if (curCategory !== '') {
            const current = foodData.filter(cate => cate.type === curCategory);
            setCurrentMenu(current);
        }
    }, [curCategory])
    const handleItem = (item) => {
        setCurrentItem(item);
        setCurrentCategory('')
    }
    const handleCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart)
        addToDatabaseCart(item.id, item.counter)
        setCurrentItem(null)
    }
    return (
        <div>
            <MenuBar handleMenu={handleMenu} curCategory={curCategory} ></MenuBar>
            {
                currentItem ?
                    <ItemDetail currentItem={currentItem} handleCart={handleCart}></ItemDetail>
                    : <SubMenu currentMenu={currentMenu} handleItem={handleItem}></SubMenu>
            }
            
        </div>
    );
};

export default Menu;