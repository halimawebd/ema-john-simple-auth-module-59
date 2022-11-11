import React, { createContext, useEffect } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged( auth, currentUser =>{
            console.log('current User inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();
    }, [])

    const authInfo = { user, loading, createUser, signIn, logOut }

 

    // const authInfo = {user, createUser, setUser}
    console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;