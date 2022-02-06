import React, {createContext, useState, useEffect} from 'react';
import BooksAPI from './api/BooksAPI';
import UserAPI from './api/UserAPI';
import GenreAPI from './api/GenreAPI';
import axios from 'axios';

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState("");

 

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
    
                setToken(res.data.accesstoken)
    
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000)
            }
            refreshToken()
        }
    },[])


    const state = {
        token: [token, setToken],
        booksAPI: BooksAPI(),
        userAPI: UserAPI(token),
        genreAPI: GenreAPI()
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
