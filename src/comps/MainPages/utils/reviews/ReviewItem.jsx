import React from 'react';
import reviewAPI from '../../../../api/reviewAPI';

const ReviewItem = (props) => {
  const deleteReview = async() => {
   const res = await reviewAPI.deleteReview(props.review._id, props.token)
   if (res) {
    props.setLoaded((prev) => !prev)
}
  }
  return(
      <div className='review-item'>
          <h3>{props.review._id}</h3>
          <p>{props.review.content}</p>
          <button onClick={deleteReview}>Delete</button>
      </div>
  )
};

export default ReviewItem;
