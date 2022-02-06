import React, {useContext, useEffect} from 'react';
import {GlobalState} from '../../../GlobalState';
import BookItem from '../utils/bookitem/BookItem';
import Loading from '../utils/loading/Loading';
import axios from 'axios';


const Books = () => {
  const state = useContext(GlobalState)
  const [books, setBooks] = state.booksAPI.books
  const [isAdmin] = state.userAPI.isAdmin
  
  const getBooks = async () => {
    const res = await axios.get('http://localhost:5000/books')
    setBooks(res.data.books);
}

    useEffect(() => {
       getBooks()
     }, [])


  return (
    <>
      <div className='books'>
          {
            books.map(book =>{
              return <BookItem key={book._id} book={book} isAdmin={isAdmin}/>
            })
          }
      </div>
      {books.length === 0 && <Loading />}
  </>
  )
};

export default Books;
