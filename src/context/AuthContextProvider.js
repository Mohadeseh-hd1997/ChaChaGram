import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Auth_Firbase } from '../firebase';

export const AuthContext = React.createContext();

export default function AuthContextProvider({children}) {

    const [loading, setLodaing] = useState(true);
    const [user, setUser] = useState(false);
    const history = useHistory();

    useEffect(() => {
        Auth_Firbase.onAuthStateChanged(user=>{
            setUser(user);
            setLodaing(false);
            if(user) history.push('/chats');
        })
    }, [user,history])

    return (
        <AuthContext.Provider value={user}>
            {!loading && children }
        </AuthContext.Provider>
    )  
}
