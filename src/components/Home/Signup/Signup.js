import React from 'react';
import Button from '@material-ui/core/Button';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container } from '@material-ui/core';
import './Signup.css'
import { Col, Row } from 'react-bootstrap';
import { UserContextName } from '../../../App';
const Signup = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBI2epogcUgl96MpeM_K6RnWSwCDJVQVho",
        authDomain: "travel-guru-web.firebaseapp.com",
        databaseURL: "https://travel-guru-web.firebaseio.com",
        projectId: "travel-guru-web",
        storageBucket: "travel-guru-web.appspot.com",
        messagingSenderId: "375087887351",
        appId: "1:375087887351:web:ea8ab298d9bca9668534f2"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        signUp: true,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false,
        privateName: '',
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContextName)

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/shipment" } };

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUser = { ...user }
                    newUser.success = true;
                    newUser.error = '';
                    setUser(newUser);
                    updateUserInfo(user.name)
                    verifyEmail();
                })
                .catch(error => {
                    const newUser = { ...user }
                    newUser.error = error.message;
                    setUser(newUser);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserinfo = { ...user };
                    newUserinfo.success = true;
                    newUserinfo.name = res.user.displayName
                    setUser(newUserinfo);
                    setLoggedInUser(newUserinfo)
                    localStorage.setItem('userLogin', JSON.stringify(newUserinfo))
                    history.replace(from)
                    console.log('Sign in user info ', res.user.displayName)
                    // console.log(res, newUserinfo)
                })
                .catch(error => {
                    // Handle Errors here.
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setUser(newUserInfo)
                    // ...
                });
        }

        e.preventDefault()
    }

    const handleSign = () => {
        const googleprovider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleprovider)
            .then(result => {
                var { displayName, email, photoURL } = result.user;
                const userInfor = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(userInfor)
                
                sessionStorage.setItem('googleUser', JSON.stringify(userInfor))
                setLoggedInUser(userInfor)
                history.replace(from)
                console.log(displayName, email)
            })
            .catch(error => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const fbprovider = new firebase.auth.FacebookAuthProvider();
    const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(fbprovider).then(function (result) {
            var { displayName, email, photoURL } = result.user;
            const userInfor = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
            }
            setUser(userInfor)
            setLoggedInUser(userInfor)
            history.replace(from)
            console.log(displayName, email)
            // var user = result.user;
            // console.log("fb user after sign in", user)
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }



    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                }
                setUser(signOutUser)
            }).catch(function (error) {
                // An error happened.
            });
    }

    const handleChange = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && isPasswordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    const updateUserInfo = (name) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(function () {
            console.log("User name updated Successfully!")
        }).catch(function (error) {
            console.log(error)
        });
    }

    const verifyEmail = () => {
        var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function () {
            // Email sent.
        }).catch(function (error) {
            // An error happened.
        });
    }

    const resetPassword = (email) => {
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(email).then(function () {
            // Email sent.
        }).catch(function (error) {
        });
    }

    return (
        <Container>
            {
                user.isSignedIn && <p>Name: {user.name}</p>
            }
            <div className="container d-flex justify-content-center">
                <div className="card" id="signUp-form" style={{ width: '500px', marginTop: '150px' }}>
                    <div className="card-header text-center text-danger font-weight-bold display-4">
                        Red-Onion
                    </div>
                    <ul className="list-group list-group-flush p-4">

                        <form onSubmit={handleSubmit}>

                            {newUser && <div className="form-group">
                                <li className="list-group-item text-center font-weight-bold">
                                    <h4>Create an account</h4>
                                </li>

                                <input type="text" name="name" onBlur={handleChange} placeholder="Enter Your Name" /></div>}
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Your email" onBlur={handleChange} required />
                            </div>

                            <div className="form-group">
                                <input type="password" name="password" placeholder="Your Password" onBlur={handleChange} required />
                            </div>
                            <div>
                                <Row>
                                    <Col>
                                        <input type="checkbox" name="remember" id="" />
                                        <label htmlFor="remember">Remember Me</label>
                                    </Col>
                                    <Col className="text-right">
                                        <a href="" onClick={() => resetPassword(user.email)} >Forget Password?</a>
                                    </Col>
                                </Row>


                            </div>
                            <input type="submit" style={{ width: '100%' }} className="btn btn-danger" value={newUser ? 'Create an account' : 'Login'} />
                            <p className="text-center">
                                {

                                    newUser ? <p>Already have an account?<span style={{ cursor: 'pointer' }} className="text-warning" onClick={() => setNewUser(!newUser)}> Login</span></p> :
                                        <p>Don't have account?<span style={{ cursor: 'pointer' }} className="text-warning" onClick={() => setNewUser(!newUser)}> Create account</span></p>

                                }
                            </p>
                        </form>
                        <br />
                        {
                            user.isSignedIn ? <button onClick={handleSignOut}>Sign out</button>
                                : <Button onClick={handleSign} style={{ marginBottom: '10px' }} variant="contained" color="primary">
                                    Continue with Google
                                        </Button>

                        }
                        <br />

                        <Button onClick={handleFbSignIn} variant="contained" color="primary">
                            Continue with Facebook
                                        </Button>

                        <br />
                        {
                            user.success ? <p style={{ color: 'green' }}>Account {newUser ? 'Created' : 'Logged In'} Successfull!</p> : <p style={{ color: 'red' }}>{user.error}</p>
                        }
                        <br />
                    </ul>
                </div>
            </div>







        </Container>
    );
};

export default Signup;