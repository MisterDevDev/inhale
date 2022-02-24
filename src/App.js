import React from 'react';
import Router from './Router';
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div>
            <NavBar />
            <Router />
            <Footer />
        </div>
    )
}

export default App

