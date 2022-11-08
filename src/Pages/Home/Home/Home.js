import React, { useEffect, useState } from 'react';
import Button from './Button/Button';
import Card from './Cards/Card/Card';

import Cards from './Cards/Cards';



import Carousel from './Carousel/Carousel';
import Text from './Text/Text';
import Title from './Title/Title';



const Home = () => {
    const [cards, setCards] = useState([])
 

    useEffect(()=> {
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    

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
        </div>
    );
};

export default Home;