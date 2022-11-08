import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div>
           <div className='mt-10 text-center mb-10'>
            <Link to={'/card'} className="btn glass">See All Card</Link>
            </div> 
        </div>
    );
};

export default Button;