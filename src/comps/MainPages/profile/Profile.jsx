import React, {useState, useContext} from 'react';
import axios from 'axios';
import { GlobalState } from '../../../GlobalState';
import Loading from '../utils/loading/Loading';


const Profile = () => {
  const state = useContext(GlobalState);
    const [images, setImages] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLogged] = state.userAPI.isLogged;
    const [token] = state.token;
    const [books] = state.booksAPI.books;
   
    

    const handleUpload = async e =>{
        e.preventDefault()
        try {
            if(!isLogged) return alert("You have to be logged in to sell products")
            const file = e.target.files[0]
            console.log(file);
            if(!file) return alert("File not found")

            if(file.size > 1024 * 1024) //1mb
                return alert("File size must be lower than 1mb")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png') //1mb
                return alert("File format not supported")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/upload/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
                
            })
            setLoading(false)
            setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
            console.log(err);
        }
    }

    const handleDestroy = async() => {
        try {
            if(!isLogged) return alert("You have to be logged in to delete products")
            setLoading(true)
            await axios.post('/upload/destroy', {public_id: images.public_id}, {
                headers: {Authorization: token}
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }


    const styleUpload = {
        display: images ? "block" : "none"
    }

  return (
    <div className='profile-page'>
        <div className="user-upload">
            <input type="file" name='file' id='avatar_upload' onChange={handleUpload} />
            {
                loading ? <div id="user-img"><Loading /></div>

                : <div id="user-img" style={styleUpload}>
                     <img src={images ? images.url : books.imageUrl} alt="cover" />
                     <span onClick={handleDestroy}> X </span>
                </div>
            }
            <div className='user-info'>
            <h3>Name</h3>
            <h5>Books read: </h5>
        </div>
        </div>

        <div className="currently-read">
            <h1>Currently Reading:</h1>
            <div className="currently-box">
            <img src="https://images-na.ssl-images-amazon.com/images/I/512YVrem8TL._SX329_BO1,204,203,200_.jpg" alt='cover'/>
            </div>
        </div>

        <div className="currently-read">
            <h1>Read:</h1>
            <div className="currently-box">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51tl4a3VY8L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt='cover'/>
            <img src="https://images-na.ssl-images-amazon.com/images/I/41YrW1-rJaL._SX260_BO1,204,203,200_.jpg" alt='cover'/>
            <img src="https://images-na.ssl-images-amazon.com/images/I/41B-qNBFC7L._SX332_BO1,204,203,200_.jpg" alt='cover'/>
            </div>
        </div>


        
    </div>
  )
};

export default Profile;
