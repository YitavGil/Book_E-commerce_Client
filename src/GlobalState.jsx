import React, {createContext, useState, useEffect} from 'react';
import BooksAPI from './api/BooksAPI';
import UserAPi from './api/UserAPi';
import axios from 'axios';

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false);

    const refreshToken = async () =>{
        const res = await axios.get('/user/refresh_token')
         console.log("res", res);   
        setToken(res.data.accesstoken)
    }

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
    },[])


    const state = {
        token: [token, setToken],
        booksAPI: BooksAPI(),
        userAPi: UserAPi(token)
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
