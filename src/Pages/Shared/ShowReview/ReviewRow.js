import React, { useEffect, useState } from 'react';

const ReviewRow = ({ view,handleDelete,handleUpdate }) => {
    const {_id, serviceName, customer, email, service, status,} = view;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])
    
  

    return (
        <tr>
            <th>
                <label>
                    <button className='btn btn-ghost' onClick={() => handleDelete(_id)}>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded w-24 h-24">

                            {
                                reviewService?.img &&
                                <img src={reviewService} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                
            </td>
            <td>{customer}</td>
            <th>
                <button 
                onClick={()=> handleUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default ReviewRow;