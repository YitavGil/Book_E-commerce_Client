import React from 'react';
import BtnRender from './BtnRender';

const BookItem = ({book, isAdmin, handleDelete, handleCheck}) => {
 
  return (
  <div className='book-card'>
     {
        isAdmin && <input type="checkbox" checked={book.checked}
        onChange={() => handleCheck(book._id)} />
      }
      <img src={book.imageUrl || book.images.url} alt="cover" />
      <div className='info-container'>
            <h2 name={book.name}>{book.name}</h2>
            <span>₪{book.price}</span>
            <p>{book.description}</p>
      </div>

      <BtnRender book={book} handleDelete={handleDelete}/>
  </div>
  )
};

export default BookItem;
