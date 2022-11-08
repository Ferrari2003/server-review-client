import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const {signIn,providerLogin} = useContext(AuthContext)

    const handleSignIn = (event) => {
        event.preventDefault();
        
        const form = event.target;  
        const name = form.name.value     
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        form.reset();

        signIn(email,password)
        .then( result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
        
    }

   const  googleProvider = new GoogleAuthProvider();

const handleGooglSignIn = () => {
    providerLogin(googleProvider)
    .then(result => {
        const user = result.user
        console.log(user)
    })
    .catch(error => console.error(error))
}

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold">Register</button>
                        </div>
                        <p>Already have an account? <Link to={'/login'} className='font-bold'>Login</Link></p>
                        <Link  to={'/'} onClick={handleGooglSignIn} className='btn btn-wide text-lg'><FaGoogle></FaGoogle> Google Login</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;