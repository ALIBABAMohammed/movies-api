import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { GoogleLogout } from '@react-oauth/google';
import {
    selectSignedIn,
    selectUserData,
    setInput,
    setSignedIn,
    setUserData,
} from "../features/userSlice";
import "../styling/navbar.css";

const Navbar = () => {

    const [inputValue, setInputValue] = useState("tech");
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue));
    }
    return (
        <div className='navbar'>
            <h1> BlogMania 💬</h1>
            {isSignedIn && (
                <div className='blog__search'>
                    <input
                        className='search'
                        placeholder='Search for a blog'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className='submit' onClick={handleClick}>
                        Search
                    </button>
                </div>
            )}
            {isSignedIn ? (
                <div className='navbar__user__data'>
                    <Avatar
                        className='user'
                        src={userData?.imageUrl}
                        alt={userData?.name}
                    />
                    <h1 className='signedIn'>{userData?.givenName}</h1>
                    <GoogleLogout 
                        render={(renderProps) => {
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className='logout__button'
                            >Logout 😦</button>
                        }}
                        onLogoutSuccess={logout}
                    />
                </div>
            ) : (
                <h1 className='notSignedIn'> User not available 😞</h1>
            )}
        </div>
    );
};

export default Navbar;