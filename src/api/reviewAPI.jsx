import axios from 'axios';

const reviewAPI =  {
 getReviews: async (bookId, token) => {
    const res = await axios.get('http://localhost:5000/review/'+ bookId, {
      headers: {Authorization: token}
    })
    return res.data.reviews;
}
};

export default reviewAPI;
