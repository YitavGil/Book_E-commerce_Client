import React, {useState, useEffect, useContext} from 'react';
import ReviewItem from './ReviewItem';
import reviewAPI from '../../../../api/reviewAPI';
import { GlobalState } from '../../../../GlobalState';
import AddReview from './AddReview';

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);
    const context = useContext(GlobalState);
    const [loaded, setLoaded] = useState(false)

    const loadReviews = async() =>{
        const [token] = context.token
        const reviews = await reviewAPI.getReviews(props.bookId, token)
        console.log(reviews);
        setReviews(reviews)
    }


    useEffect(() =>{
        loadReviews()
    },[])

    useEffect(() =>{
        loadReviews()
    },[loaded])

  return(
      <div>
          <AddReview bookId={props.bookId} token={context.token[0]} setLoaded={setLoaded}/>
          {reviews && reviews.map(review => {
              return <ReviewItem key={review._id} review={review} token={context.token[0]} setLoaded={setLoaded}/>
          })}
      </div>
  )
};

export default Reviews;
