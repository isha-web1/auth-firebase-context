import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/FireBase.config';
import { useState} from 'react';

 export const  AuthContext = createContext(null)

 const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
       return signOut(auth)
    }

    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser )
            setUser(currentUser)
        })
        return () =>{
          unSubscribe()
        }
    }, [])

    const AuthInfo = {
        user,
        createUser,
        SignIn,
        logout
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;