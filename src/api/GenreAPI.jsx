import React, {useState, useEffect} from 'react';
import axios from 'axios';

const GenreAPI = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() =>{
        const getGenres = async() =>{
            const res = await axios.get('/genres')
            setGenres(res.data)
        }

        getGenres()
    },[])
  return{
      genres: [genres, setGenres]
  }
};

export default GenreAPI;
