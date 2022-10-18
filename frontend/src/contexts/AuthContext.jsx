import {React, createContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({children}) {

    const [user, setUser] = useState({name: 'Réka'});
    const [isLoggedIn, setLoggedIn] = useState(false);

    const logInAndOut = () => {
        setLoggedIn(!isLoggedIn)

    }


    return (
        <AuthContext.Provider value={{user, isLoggedIn, logInAndOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;