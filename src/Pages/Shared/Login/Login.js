import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const {Login} = useContext(AuthContext)
    
    const handleLogin = (event) => {  
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        Login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
        })
        .catch(error => console.error(error));
        
    }
  
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email'  placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered"required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold">Login</button>
                        </div>
                        <p>Create new account? <Link to={'/register'} className=' text-cyan-400 font-bold'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;