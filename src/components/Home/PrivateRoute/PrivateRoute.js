import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const userLogin = JSON.parse(localStorage.getItem('userLogin'));

    const [test, setTest] = useState({
        isLogin: true,
    })
    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                    (userLogin.email || (test.isLogin && userLogin.name)) ? (
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