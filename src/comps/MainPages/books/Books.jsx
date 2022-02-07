import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState';
import BookItem from '../utils/bookitem/BookItem';
import Loading from '../utils/loading/Loading';



const Books = () => {
  const state = useContext(GlobalState)
  const [books, setBooks] = state.booksAPI.books
  const [isAdmin] = state.userAPI.isAdmin
  const [token] = state.token
  const [callback, setCallback] = state.booksAPI.callback

  const deleteBook = async (id, public_id) =>{
    try {
      setLoading(true)
      const destroyImg = axios.post('/destroy', {public_id: book.images.public_id},{
        headers: {Authorization: token}
      })
      const deleteBook = axios.delete(`/books/${book._id}`, {
        headers: {Authorization: token}
      })

      await destroyImg
      await deleteBook
      setLoading(false)
      setCallback(!callback)
    } catch (err) {
      alert(err.response.data.msg)
      console.log(err);
    }
  }

  const handleCheck = () =>{
    let newBook = [...book]
    newBook.checked = !newBook.checked
    setBooks(newBook)
  }

  return (
    <>
      <div className='books'>
          {
            books.map(book =>{
              return <BookItem key={book._id} book={book} setBooks={setBooks} isAdmin={isAdmin}
              isAdmin={isAdmin} token={token} callback={callback} setCallback={setCallback}/>
            })
          }
      </div>
      {books.length === 0 && <Loading />}
  </>
  )
};

export default Books;
