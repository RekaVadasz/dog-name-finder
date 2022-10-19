import {React, createContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({children}) {

    const [userData, setUserData] = useState();
    const [isLoggedIn, setLoggedIn] = useState(false);

    const logInAndOut = () => {
        setLoggedIn(!isLoggedIn)

    }

    const setUser = (userData) => {
        setUserData(userData)
    }


    return (
        <AuthContext.Provider value={{userData, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;