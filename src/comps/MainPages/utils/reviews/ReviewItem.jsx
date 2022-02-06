import React from 'react';

const ReviewItem = (props) => {
  return(
      <div className='review-item'>
          <h3>{props.review.user.name}</h3>
          <p>{props.review.content}</p>
      </div>
  )
};

export default ReviewItem;
