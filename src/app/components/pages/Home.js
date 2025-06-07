import React, { useState } from 'react';
import { Header } from './HomeComponents/Header';
import { AboutUs } from './HomeComponents/AboutUs';
import { KeyFeatures } from './HomeComponents/KeyFeatures';
import { Prices } from './HomeComponents/Prices';
import { Footer } from './HomeComponents/Footer';
import { LoginModal } from './LoginComponents/LoginModal';

export function Home() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="App">
            <Header onSignInClick={() => setShowLogin(true)} />
            <AboutUs />
            <KeyFeatures />
            <Prices />
            <Footer />
            <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
        </div>
    );
}