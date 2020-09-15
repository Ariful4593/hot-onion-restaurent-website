import React from 'react';
import { Button, Form } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContextName } from '../../../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Signup = () => {
    
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false,
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
                    // history.push('/select')
                    // console.log(history)
                })
                .catch(error => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    const newUser = { ...user }
                    newUser.error = error.message;
                    setUser(newUser);
                    
                    // console.log(errorMessage);
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
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                // var token = result.credential.accessToken;
                // The signed-in user info.
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
            })
            .catch(error => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
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
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>I am from Signup</h1>
            {
                user.isSignedIn && <p>Name: {user.name}</p>
            }

            <input type="checkbox" name="newUser" onClick={() => setNewUser(!newUser)} id="" />
            <label htmlFor="newUser">New user Registration</label>

            <form onSubmit={handleSubmit}>
                {newUser && <input type="text" name="name" onBlur={handleChange} placeholder="Enter Your Name" />}<br />
                <input type="email" name="email" placeholder="Your email" onBlur={handleChange} required /><br />
                <input type="password" name="password" placeholder="Your Password" onBlur={handleChange} required /><br />
                <input type="submit" value={newUser ? 'SignUp' : 'SignIn'} />
            </form>
        <p>Name: {user.name}</p>
            {
                user.isSignedIn ? <button onClick={handleSignOut}>Sign out</button>
                    : <button onClick={handleSign}>Continue with Google</button>
            }
            {
                user.success ? <p style={{ color: 'green' }}>Account {newUser ? 'Created' : 'Logged In'} Successfull!</p> : <p style={{ color: 'red' }}>{user.error}</p>
            }

        </div>
    );
};

export default Signup;