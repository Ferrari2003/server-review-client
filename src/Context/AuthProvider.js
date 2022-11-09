import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext =  createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const Login = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email,password);
    }

    const providerLogin =(provider) => {
        return signInWithPopup(auth,provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        
     })
     return () => {
         unsubscribe();
     }
    },[])

  const authInfo = {user, Login, loading,signIn, logOut, providerLogin }
     
    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>

    );  
};

export default AuthProvider;




