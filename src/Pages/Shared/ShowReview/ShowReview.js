import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const ShowReview = () => {
    const {user} = useContext(AuthContext);
    const [review, setReview] = useState([])

    

    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReview(data))
    },[user?.email])

    return (
        <div>
            <h2>{review.length}</h2>
        </div>
    );
};

export default ShowReview;