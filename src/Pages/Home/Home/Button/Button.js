import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div>
           <div className='mt-10 text-center'>
            <Link to={'/card'} className="btn glass">Glass button</Link>
            </div> 
        </div>
    );
};

export default Button;