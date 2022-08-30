import React from 'react';
import Profile from "./profile";
import Login from "./login";
import Register from "./register";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../components/AppRouter';
import {store} from '../store/reducers';
import { Provider } from 'react-redux';

export default function Home () {
    return (
        <Provider store={store}>
            <Login />
        </Provider>
    );
}