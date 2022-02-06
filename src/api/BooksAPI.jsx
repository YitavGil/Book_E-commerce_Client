import {useState, useEffect} from 'react';
import axios from 'axios';

const BooksAPI = () => {
    const [books, setBooks] = useState([]);
    const [callback, setCallback] = useState(false)

    useEffect(() => {
      const getBooks = async () => {
        const res = await axios.get('http://localhost:5000/books')
        setBooks(res.data.books);
    }
       getBooks()
     }, [callback])

  return {
     books: [books, setBooks],
     callback: [callback, setCallback]
    }
};

export default BooksAPI;
