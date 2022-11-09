import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { FaUser, FaPhone } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../Context/AuthProvider';


const Details = () => {
    const { _id, img, title, discription } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleSubmitForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const message = form.message.value;
        


        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            number,
            message
        }
      
        if(number.length > 10){
            alert('Phone number 10 characters')
        }
        else{
          fetch(`http://localhost:5000/review`,{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(review)
          })  
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Your Review successful')
                form.reset();
            }
        })
          .catch(error => console.error(error));
        }
       
    }

    return (
        <section>
            <div>
                <div>
                    <figure>
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="" className='w-full' />
                            </PhotoView>
                        </PhotoProvider>
                    </figure>
                    <div className='text-center'>
                        <h2 className=' text-4xl mt-6'>{title}</h2>
                        <br />
                        <h2>{discription}</h2>
                    </div>
                </div>
            </div>
            <br />
            <section>
                <div className="w-full">
                    <h1 className='text-center mb-7 text-5xl'>Barber Review From</h1>
                    <div className="w-3/4 mx-auto flex justify-center">
                        <form onSubmit={handleSubmitForm} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-200">
                            <div className="card-body">
                                <div className="form-control flex">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <FaUser className="absolute top-24 ml-2" />
                                    <input
                                        type="text"
                                        name='name'
                                        placeholder="name"
                                        required
                                        className="input input-bordered p-8"
                                    />
                                </div>
                                <div className="form-control flex">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="absolute bottom-96 top-52 ml-2"
                                    />
                                    <input
                                        type="email"
                                        name='email'
                                        defaultValue={user?.email}
                                        placeholder="email"
                                        required                                       
                                        className="input input-bordered p-8 mt-1"
                                    />
                                </div>
                                <div className="form-control flex">
                                    <label className="label">
                                        <span className="label-text">Number</span>
                                    </label>
                                    <FaPhone className="absolute top-80 ml-2" />
                                    <input
                                        type="number"
                                        name="number"
                                        placeholder="number"
                                        required
                                        className="input input-bordered p-8"
                                    />
                                </div>
                                <div className="text-center flex">
                                    <FontAwesomeIcon
                                        icon={faMessage}
                                        className="absolute bottom-44 ml-2"
                                    />
                                    <textarea
                                        className="textarea textarea-primary  p-8 w-full mt-3"
                                        name='message'
                                        placeholder="message"
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div >
                        </form>
                        {/* end : review add form */}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Details;