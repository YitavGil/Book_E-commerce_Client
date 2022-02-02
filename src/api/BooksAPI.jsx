import {useState, useEffect} from 'react';
import axios from 'axios';

const BooksAPI = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const res = await axios.get('http://localhost:5000/books')
        setBooks(res.data.books);
    }

    useEffect(() => {
        getBooks()
    }, [])



  return {
     books: [books, setBooks]
    }
};

export default BooksAPI;
