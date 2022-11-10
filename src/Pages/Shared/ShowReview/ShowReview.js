import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import ReviewRow from './ReviewRow';

const ShowReview = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([])



    useEffect(() => {
        fetch(`https://barber-shop-server.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure want to cancel this review')
        if (proceed) {
            fetch(`https://barber-shop-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = review.filter(reviews => reviews._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }

    const handleUpdate = id => {
        fetch(`https://barber-shop-server.vercel.app/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = review.filter(reviews => reviews._id !== id);
                    const approving = review.filter(reviews => reviews._id === id);
                    approving.status = 'Approved'

                    const newReviews = [approving, ...remaining,];
                    setReview(newReviews);
                }
            })
    }

    return (
        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>email</th>
                            <th>ServiceName</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(view => <ReviewRow key={view._id}
                                view={view}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowReview;