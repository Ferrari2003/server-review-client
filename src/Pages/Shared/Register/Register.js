import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const {signIn,providerLogin} = useContext(AuthContext)

    const handleSign = (event) => {
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
                    <form onSubmit={handleSign} className="card-body">
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
                            <Link  className="btn btn-primary font-bold">Register</Link>
                        </div>
                        <p>Already have an account? <Link  className='font-bold'>Login</Link></p>
                       <div className='flex  justify-center'>
                       <Link  to={'/'} onClick={handleGooglSignIn} className="btn btn-outline btn-secondary" ><FaGoogle className='mr-4 text-red-700 text-2xl'></FaGoogle> Google Login</Link>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;