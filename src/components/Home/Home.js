import React from 'react';
import Choose from './Choose/Choose';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Menu from './Menu/Menu';
const Home = (props) => {
    
    return (
        <div>
            <Header cart={props.cart}></Header>
            <Menu></Menu>
            <Choose></Choose>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;