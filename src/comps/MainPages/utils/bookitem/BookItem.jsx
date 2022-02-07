import React, {useState} from 'react';
import BtnRender from './BtnRender';
import axios from 'axios';

const BookItem = ({book, setBooks, isAdmin, token, callback, setCallback}) => {
 
  return (
  <div className='book-card'>
     {
        isAdmin && <input type="checkbox" checked={book.checked}
        onChange={handleCheck} />
      }
      <img src={book.imageUrl || book.images.url} alt="cover" />
      <div className='info-container'>
            <h2 name={book.name}>{book.name}</h2>
            <span>₪{book.price}</span>
            <p>{book.description}</p>
      </div>

      <BtnRender book={book} deleteBook={deleteBook}/>
  </div>
  )
};

export default BookItem;
