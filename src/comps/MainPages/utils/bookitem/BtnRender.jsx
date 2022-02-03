import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../../GlobalState';

const BtnRender = ({book}) => {
  const state = useContext(GlobalState)
  const [isAdmin] = state.userAPI.isAdmin
  const addToCart = state.userAPI.addToCart

  return(
    <div className='row-btn'>
      {
        isAdmin ? 
        <>
            <Link id='buy-btn' to="#!">
                Delete
            </Link>
            <Link id='view-btn' to={`/edit_book/${book._id}`}>
                 Edit
            </Link>
        </>
        : <>
          <Link id='buy-btn' to="#!" onClick={() => addToCart(book)}>
               Buy Now
          </Link>
          <Link id='view-btn' to={`/detail/${book._id}`}>
               View
          </Link>
        </>
      }
    
</div>
  )
};

export default BtnRender;
