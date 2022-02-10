import axios from 'axios';

const reviewAPI =  {
 getReviews: async (bookId, token) => {
    const res = await axios.get(`/review/`+ bookId, {
      headers: {Authorization: token}
    }) 
    
    return res.data;
},
postReview: async(bookId, review, token) => {
  const reviewBody = {bookId, content: review}
  const res = await axios.post(`/review`,reviewBody, {
    headers: {"Authorization": token},
   
  })
  if(res.status === 201){
    return true;
  }else{
    return false;
  }
},
updateReview: async(bookId, review, token) => {
  const reviewBody = {bookId, content: review}
  const res = await axios.patch(`/review`,reviewBody, {
    headers: {"Authorization": token},
   
  })
  if(res.status === 201){
    return true;
  }else{
    return false;
  }
},
deleteReview: async (reviewId, token) =>{
  const res = await axios.delete(`/review/${reviewId}`, {
    headers: {"Authorization": token},
   
  })
  if(res.status === 200){
    return true;
  }else{
    return false;
  }
}

};

export default reviewAPI;
