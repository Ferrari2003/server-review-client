
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider';
import logo from '../../../logo/logo.png'
import { Image } from 'react-bootstrap';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch();
    }

    const menuItems = <>
        <li><Link className='btn btn-outline  mr-4' to={'/'}>Home</Link></li>
       <li  className='btn btn-outline btn-primary mr-4'><Link to={'/about'}>About</Link></li>
       {
        user?.email ?
        <>
        <li  className='btn btn-outline btn-secondary mr-4'><Link to={'/showReview'}>ShowReview</Link></li>
        <li className='btn btn-outline btn-secondary mr-4'>
            <button onClick={handleLogOut}>LogOut</button>
        </li>
        </>
        :
       <li className='btn btn-outline btn-secondary mr-4'> <Link to={'/login'} >Login</Link></li>

        }
       <li className='btn rounded btn-outline btn-accent mr-4'><Link to={'blog'}>Blog</Link></li>
    </>


    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    
    <Link className='ml-10' to={'/'}>
          <img className='w-40' src={logo} alt="" />
    </Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
     
    </ul>
  </div>
 <div className='ml-80'> 
 <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">       
        <div className="w-10 rounded-full">
            {
                user?.photoURL ?
                <Image src={user?.photoURL}></Image>
                :<FaUser></FaUser>
            }
        </div>
      </label>    
    </div>
  </div>
</div>
    );
};

export default Header;









// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../Context/AuthProvider';
// import logo from '../../../logo/logo.png'
// import { FaUser } from "react-icons/fa";
// import { Image } from 'react-bootstrap';


// const Header = () => {





//     const { user, LogOut } = useContext(AuthContext);

//     const handleSingOut = () => {
//         LogOut()
//             .then(() => { })
//             .catch(() => { })
//     }

    // const menuItems = <>

    //  <Link to={'/'} className='btn btn-outline mr-4'>Home</Link>
    //                 <Link to={'/about'} className='btn btn-outline btn-primary mr-4'>About</Link>
    //                 {
    //                     user?.email ?
    //                         <>
    //                             <Link to={'/showReview'} className='btn btn-outline btn-secondary mr-4'>Show_review</Link>
    //                             <Link onClick={handleSingOut} className='btn btn-outline btn-secondary mr-4'>Sing out</Link>
    //                         </>
    //                         :
    //                         <Link to={'/login'} className='btn btn-outline btn-secondary mr-4'>Login</Link>
    //                 }
    //                 <Link to={'blog'} className='btn btn-outline btn-accent mr-4'>Blog</Link>
    // </>

//     return (
//         <div className="navbar bg-base-100 ">
//             <div className="flex-1">
//                 <Link to={'/'}>
//                     <img className='w-40' src={logo} alt="" />
//                 </Link>
//             </div>
//             <div className="flex-none gap-2">
//                 <div className='mr-11'>
                   
//                 <menuItems></menuItems>

//                 </div>
//                 <div className="dropdown dropdown-end mr-7">
//                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                         <div className="w-10 rounded-full">
//                             {user?.photoURL ?
//                                 <Image src={user?.photoURL}></Image>
//                                 : <FaUser></FaUser>
//                             }
//                         </div>
//                     </label>
//                     <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
//                         <li>
//                             <Link className="justify-between">
//                                 Profile
//                                 <span className="badge">New</span>
//                             </Link>
//                         </li>
//                         {user?.email}



//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;