import React, {useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import Books from './books/Books';
import BookDetails from './bookdetail/BookDetails';
import Login from './auth/Login';
import Register from './auth/Register';
import Cart from './cart/Cart';
import Library from './library/Library';
import NotFound from './utils/notfound/NotFound';
import { GlobalState } from '../../GlobalState';
import Genres from './genres/Genres';

const Pages = () => {
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin
  return (
    <Switch>
      <Route path='/' exact component={Books} />
      <Route path='/detail/:id' exact component={BookDetails} />
      <Route path='/login' exact component={isLogged ? NotFound : Login} />
      <Route path='/register' exact component={isLogged ? NotFound : Register} />
      <Route path='/cart' exact component={Cart} />
      <Route path='/library' exact component={Library} />
      <Route path='/genres' exact component={Genres} />

      <Route path='*' exact component={NotFound} />
    </Switch>
  )
};

export default Pages;
