import React from 'react';
import { useLoaderData } from 'react-router';
import { FaUser, FaPhone } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Details = () => {
    const { img, title, discription } = useLoaderData()
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
                    <div className="w-3/4 mx-auto flex justify-center">
                        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-200">
                            <div className="card-body">
                                <div className="form-control flex">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <FaUser className="absolute top-24 ml-2" />
                                    <input
                                        type="text"
                                        placeholder="name"
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
                                        type="text"
                                        placeholder="email"
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
                                        placeholder="number"
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
                                        placeholder="message"
                                    ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                        {/* end : review add form */}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Details;