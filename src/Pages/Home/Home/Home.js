import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceTime from '../../../ServiceTime/ServiceTime';
import Banner from '../../Shared/Benner/Banner';
import Button from './Button/Button';


import Cards from './Cards/Cards';



import Carousel from './Carousel/Carousel';
import Text from './Text/Text';
import Title from './Title/Title';



const Home = () => {
    const cards = useLoaderData();
 
    return (
        <div>
            <Carousel></Carousel>
            <Title></Title>
            <Text></Text>
            
            <div className='mt-11 grid grid-cols-1 lg:grid-cols-3 gap-7'>               
                {
                    cards.map(card => <Cards key={card._id} 
                    card={card}></Cards>)
                }
            </div>
            
          
            <Button></Button>
            <ServiceTime></ServiceTime>
            <Banner></Banner>
        </div>
    );
};

export default Home;