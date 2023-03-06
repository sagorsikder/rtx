import React from 'react';
import About from '../About';
import Alern from '../Alern';
import Banner from '../Banner';
import TronMillionair from '../TronMillionair';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Alern></Alern>
            <TronMillionair></TronMillionair>

            <About></About>

        </div>
    );
};

export default Home;