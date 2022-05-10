import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import './Home.module.css'

const Home = () => {
    return (
        <div className='component-container'>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>

        </div>
    );
};

export default Home;