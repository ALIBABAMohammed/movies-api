import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;

// Compare this snippet from client/src/index.js:
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from "react-redux";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { GoogleOAuthProvider } from '@react-oauth/google';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <GoogleOAuthProvider clientId="1028778265538-lql547t2u6hq59am6go29ei0me1coqhv.apps.googleusercontent.com">
//   <Provider></Provider>
//   <React.StrictMode></React.StrictMode>
//     <App />
//   </Provider>
//   </GoogleOAuthProvider>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

