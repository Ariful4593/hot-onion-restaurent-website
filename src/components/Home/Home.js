import React from 'react';

import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Home = (props) => {
    
    return (
        <div>
            <Header cart={props.cart}></Header>
            <Body handleFood={props.handleFood} ></Body>
            <Footer></Footer>
        </div>
    );
};

export default Home;