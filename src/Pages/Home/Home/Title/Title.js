import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../../../images/All-back-Barber-Shop-5-4-Fading.webp'

const Title = () => {
    return (
        <div className="hero mt-10 bg-pink-600 p-4">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='text-center'>
                    <h1 className="text-5xl font-bold">Barber - Wikipedia</h1>
                    <p className="py-6">In modern times, the term "barber" is used both as a professional title and to refer to hairdressers who specialize in men's hair. Historically, all hairdressers were considered barbers.</p>
                    <Link to={'/about'} className="btn btn-primary">More.</Link>
                </div>
            </div>
        </div>
    );
};

export default Title;