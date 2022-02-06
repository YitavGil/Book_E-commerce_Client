import {useState, useEffect} from 'react';
import axios from 'axios';
import Books from '../comps/MainPages/books/Books';

const UserAPI = (token) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        
        if(token && token.length > 0){
            const getUser = async () =>{
                try {
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                    
                    setCart(res.data.cart)

                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
        }
    },[token])

    const addToCart = async (product) => {
        const check = cart.every(item =>{
            return item._id !== Books._id
        })

        if(check){
            setCart([...cart, {...product, quantity:1}])

            await axios.patch('/user/addtocart', {cart: [...cart, {...product, quantity:1}]}, {
                headers: {Authorization: token}
            })
        }else {
            alert("This product has been added to the cart.")
        }
    }

  return {
      isLogged: [isLogged, setIsLogged],
      isAdmin: [isAdmin, setIsAdmin],
      cart: [cart, setCart],
      addToCart: addToCart
  }
};

export default UserAPI;
