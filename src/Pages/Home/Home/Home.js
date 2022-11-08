import React, { useEffect, useState } from 'react';
import Carousel from './Carousel/Carousel';
import Title from './Title/Title';



const Home = () => {
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:5000/service`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return (
        <div>
            <Carousel></Carousel>
            <Title></Title>
            <h2>this is home :{data.length}</h2>
            
        </div>
    );
};

export default Home;