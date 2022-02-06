import React, {useContext} from 'react';
import {GlobalState} from '../../GlobalState';
import menu from './icon/menu.svg';
import close from './icon/close.svg';
import cartIcon from './icon/cart.svg';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Header = () => {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        localStorage.clear()
       window.location.href = '/';
    }

    const adminRouter = () => {
        return(
            <>
                <li><Link to='/create_product'>Create Product</Link></li>
                <li><Link to='/genres'>Genres</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </>
        )
    }
    const loggedRouter = () => {
        return(
            <>
                <li><Link to='/create_product'>Sell Books</Link></li>
                <li><Link to='/' onClick={logoutUser}>Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            
            </>
        )
    }
  return (
        <header>
            <div className="menu">
                <img src={menu} alt="menu" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to='/'>{isAdmin ? "Admin"  : "SoulRead"}
                    {isAdmin ? <i className="fas fa-crown"></i> : <i className="fas fa-dove"></i>}
                    </Link>
                </h1>
            </div>

            <ul>
                <li><Link to="/">{isAdmin ? "Books" : "Shop"}</Link></li>
                

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login/Register</Link></li>
                }
                
                <li>
                    <img src={close} alt='close' width="30" className='menu' />
                </li>
            </ul>

            {
                isAdmin ? '' : 
                    <div className='cart-icon'>
                    <span>{cart.length}</span>
                    <Link to='/cart'>
                        <img src={cartIcon} alt="cart" width="30"/>
                    </Link>
                    </div>
            }

        </header>
  )
};

export default Header;
