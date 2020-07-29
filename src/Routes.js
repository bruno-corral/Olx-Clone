import React from 'react';
import { Switch } from 'react-router-dom';

import RaouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads';


export default () => {
    return (
        <Switch>
            <RaouteHandler exact path="/">
                <Home />
            </RaouteHandler>
            <RaouteHandler exact path="/about">
                <About />
            </RaouteHandler>
            <RaouteHandler exact path="/signin">
                <SignIn />
            </RaouteHandler>
            <RaouteHandler exact path="/signup">
                <SignUp />
            </RaouteHandler>
            <RaouteHandler exact path="/ad/:id">
                <AdPage />
            </RaouteHandler>
            <RaouteHandler private exact path="/post-an-ad">
                <AddAd />
            </RaouteHandler>
            <RaouteHandler exact path="/ads">
                <Ads />
            </RaouteHandler>
            <RaouteHandler>
                <NotFound />
            </RaouteHandler>
        </Switch>
    );
}