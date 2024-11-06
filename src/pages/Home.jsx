import React from 'react';
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import Maps from '../components/Maps';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
    return (
        <div className=' container mx-auto w-[90%] '>
            <Slider></Slider>
            <Cards></Cards>
            <Maps></Maps>
            <NewsLetter></NewsLetter>

          
            
        </div>
    );
};

export default Home;