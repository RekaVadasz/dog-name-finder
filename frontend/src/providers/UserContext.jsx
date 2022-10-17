import {React, createContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({children}) {

    const [user, setUser] = useState({name: 'Réka'});
    const [isLoggedIn, setLoggedIn] = useState(false);

    const logInAndOut = () => {
        setLoggedIn(!isLoggedIn)

    }


    return (
        <UserContext.Provider value={{user, isLoggedIn, logInAndOut}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;