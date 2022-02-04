import React, {useState, useContext} from 'react';
import { GlobalState } from '../../../GlobalState';
import axios from 'axios';

const Genres = () => {
    const state = useContext(GlobalState)
    const [genres, setGenres] = state.genreAPI.genres
    const [genre, setGenre] = useState('')
    const [token] = state.token

    const createGenre = async e =>{
        e.preventDefault()
        try {
            const res = await axios.post('/genres', {name: genre},{
                headers: {Authorization: token} 
            })

            console.log(res);
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

  return (
    <div className='genres'>
        <form onSubmit={createGenre}>
            <label htmlFor="genres">Genre</label>
            <input type="text" name='genre' value={genre} required
            onChange={(e) => setGenre(e.target.value)}
            />

            <button type='submit'>Save</button>
        </form>

        <div className="col">
            {
                genres.map(genre => (
                    <div className='row' key={genre._id}>
                        <p>{genre.name}</p>
                        <div className="genre-btn">
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
};

export default Genres;
