import React, {useContext, useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import BookItem from '../utils/bookitem/BookItem';
import Reviews from '../utils/reviews/Reviews';

const BookDetails = () => {
    const params = useParams();
    const state = useContext(GlobalState);
    const [books] = state.booksAPI.books;
    const addCart = state.userAPI.addToCart
    const [bookDetail, setBookDetail] = useState([]);

    useEffect(() =>{
        if(params.id){
            books.forEach(book => {
                if(book._id === params.id){
                    setBookDetail(book)
                } 
            })
        }
    },[params.id, books])

    if(bookDetail.length === 0){
        return null
    }
  return (
      <>
    <div className='detail'>
        <img src={bookDetail.imageUrl} alt='book-cover'/>
        <div className='detail-box'>
            <div className='row'>
                    <h2>{bookDetail.name}</h2>
            </div>
            <span>₪ {bookDetail.price}</span>
            <p>{bookDetail.description}</p>
            <Link to='/cart' className='cart' onClick={() => addCart(bookDetail)}>Buy Now</Link>
        </div>
    </div>

    <div>
        <h2>Related products</h2>
        <div className='books'>
            {
                books.map(book =>{
                    return book.genre.name === bookDetail.genre.name
                    ? <BookItem key={book._id} book={book} /> : null
                })
            }
        </div>
    </div>

    <Reviews bookId={params.id}/>
  </>
  )
};

export default BookDetails;
