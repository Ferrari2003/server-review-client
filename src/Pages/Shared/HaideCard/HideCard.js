import React from 'react';

const HideCard = ({data}) => {
    const {img, title, discription} = data
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{discription}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default HideCard;