import React from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';

function Funds() {
    return (
        <div className="funds">
            <Navbar />
            <Header />
            <h1> This is the funds page </h1>
        

            <Footer />
        </div>
    )
}

export default Funds;