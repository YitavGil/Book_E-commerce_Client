import React, {useContext, useEffect} from 'react';
import {GlobalState} from '../../../GlobalState';
import BookItem from '../utils/bookitem/BookItem';
import Loading from '../utils/loading/Loading';
import axios from 'axios';


const Books = () => {
  const state = useContext(GlobalState)
  const [books] = state.booksAPI.books
  const [isAdmin] = state.userAPI.isAdmin


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
