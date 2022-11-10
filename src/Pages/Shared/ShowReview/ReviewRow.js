import React from 'react';

const ReviewRow = ({ view,handleDelete,handleUpdate }) => {
    const {_id, serviceName, customer, email,  status,} = view;
   
    
  

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
                        
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                
            </td>
            <td>{serviceName}</td>
            <th>
                <button 
                onClick={()=> handleUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default ReviewRow;