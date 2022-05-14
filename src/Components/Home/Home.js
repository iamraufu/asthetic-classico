import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Featured from './Featured';
import Quote from './Quote';
import ReactCarousel from './ReactCarousel';

const Home = () => {
    return (
        <main className='font-brand'>
            <Navbar />
            <ReactCarousel />
            <Featured />
            <Quote />
        </main>
    );
};

export default Home;