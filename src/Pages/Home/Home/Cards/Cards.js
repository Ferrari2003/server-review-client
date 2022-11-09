import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Cards = ({ card }) => {
    const { _id, img, title, discription } = card;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{discription}</p>
                    <div className="card-actions justify-end">

                        <Link to={`/details/${_id}`} className="btn btn-primary">Show Details</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cards;