import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import logo from '../../../logo/logo.png'
import { FaUser } from "react-icons/fa";
import { Image } from 'react-bootstrap';


const Header = () => {
    const {user,LogOut} = useContext(AuthContext);

    const handleLogOut=() => {
        LogOut()
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={'/'}>
                    <img className='w-40' src={logo} alt="" />
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className='mr-11'>
                    <Link to={'/'} className='btn btn-outline mr-4'>Home</Link>
                    <Link to={'/about'} className='btn btn-outline btn-primary mr-4'>About</Link>
                    <Link to={'/login'} className='btn btn-outline btn-secondary mr-4'>Login</Link>
                    <Link to={'blog'} className='btn btn-outline btn-accent mr-4'>Blog</Link>
                  
                </div>
                <div className="dropdown dropdown-end mr-7">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user?.photoURL ?
                                <Image src={user.photoURL}></Image>
                                : <FaUser></FaUser>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>

                        <li><Link to={'/login'} onClick={handleLogOut}>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;