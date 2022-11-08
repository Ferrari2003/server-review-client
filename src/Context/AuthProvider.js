import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth,  signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext =  createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

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

  const authInfo = {user, Login,signIn, logOut, providerLogin }
     
    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>

    );  
};

export default AuthProvider;




// useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, CurrentUser => {
//         setUser(CurrentUser)
//         SetLoader(false)
//      })
//      return () => {
//         return unsubscribe
//      }
//     },[])