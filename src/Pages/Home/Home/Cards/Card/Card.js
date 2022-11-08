import React, { useEffect, useState } from 'react';
import CardTo from '../../CardTo/CardTo';

const Card = () => {
    const [allCard, setAllCard] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:5000/service`)
        .then(res => res.json())
        .then(data => setAllCard(data))
    },[])
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
               allCard.map(card => <CardTo key={card._id}
               card={card}></CardTo>) 
            }
          </div>
    );
};

export default Card;