import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const userLogin = JSON.parse(localStorage.getItem('userLogin'));
    // eslint-disable-next-line no-unused-vars
    const [test, setTest] = useState({
        isLogin: true,
    })
    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                    (userLogin.email || (test.isLogin && userLogin.name) ) ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/signup",
                                    state: { from: location }
                                }}
                            />
                        )
            }
        />
    );
};

export default PrivateRoute;