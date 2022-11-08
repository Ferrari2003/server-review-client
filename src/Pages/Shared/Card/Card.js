import React from 'react';
import { useLoaderData } from 'react-router';
import HideCard from '../HaideCard/HideCard';

const Card = () => {
    const serviceData = useLoaderData()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {
                serviceData.map(data => <HideCard key={data._id}
                data={data}></HideCard>)
            }
        </div>
    );
};

export default Card;