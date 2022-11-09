import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({card}) => {
    const { img, title, discription} =card;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl m-auto">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{discription}</p>
                    <div className="card-actions justify-end">

                        <Link  className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Cards;