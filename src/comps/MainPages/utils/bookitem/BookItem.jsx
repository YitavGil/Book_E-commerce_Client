import React from 'react';
import BtnRender from './BtnRender';

const BookItem = ({book, isAdmin}) => {
  return (
  <div className='book-card'>
     {
        isAdmin && <input type="checkbox" checked={book.checked} />
      }
      <img src={book.imageUrl} alt="cover" />
      <div className='info-container'>
            <h2 name={book.name}>{book.name}</h2>
            <span>₪{book.price}</span>
            <p>{book.description}</p>
      </div>

      <BtnRender book={book} />
  </div>
  )
};

export default BookItem;
