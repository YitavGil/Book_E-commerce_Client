import React, {useState, useContext} from 'react';
import axios from 'axios';
import { GlobalState } from '../../../GlobalState';
import Loading from '../utils/loading/Loading';

const initialState = {
    product_id: '',
    name: '',
    genre: '',
    price: 0,
    description: ''
}

const CreateProduct = () => {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [genres] = state.genreAPI.genres
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)

  return (
    <div className='create-product'>
        <div className="upload">
            <input type="file" name='file' id='file_upload' />
            <div id="file-img">
                <img src="" alt="" />
                <span> X </span>
            </div>
        </div>

        <form>
            <div className="row">
                <label htmlFor="product_id">Product ID</label>
                <input type="text" name='product_id' id='product_id' required
                value={product.product_id} />
            </div>

            <div className="row">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' required
                value={product.name} />
            </div>

            <div className="row">
                <label htmlFor="price">Price</label>
                <input type="number" name='price' id='price' required
                value={product.price} />
            </div>

            <div className="row">
                <label htmlFor="description">Description</label>
                <input type="text" name='description' id='description' required
                value={product.description} />
            </div>

            <div className="row">
                <label htmlFor="genre">Genre</label>
                <select name="genre" value={product.genre}>
                    <option value="">Select Genre</option>
                    {
                        genres.map(genre => (
                            <option value={genre._id}>
                                {genre.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        </form>
    </div>
  )
};

export default CreateProduct;
