import React, {useState, useEffect, useContext} from 'react';
import ReviewItem from './ReviewItem';
import reviewAPI from '../../../../api/reviewAPI';
import { GlobalState } from '../../../../GlobalState';

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);
    const context = useContext(GlobalState);

    const loadReviews = async() =>{
        const [token] = context.token
        const reviews = await reviewAPI.getReviews(props.bookId, token)
        setReviews(reviews)
    }


    useEffect(() =>{
        loadReviews()
    },[])

  return(
      <div>
          {reviews && reviews.map(review => {
              return <ReviewItem key={review._id} review={review}/>
          })}
      </div>
  )
};

export default Reviews;
