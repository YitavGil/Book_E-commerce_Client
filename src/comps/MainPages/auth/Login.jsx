import React, {useState, useContext} from 'react';
import { Link, useHistory  } from 'react-router-dom';
import axios from 'axios';
import { GlobalState } from '../../../GlobalState';
 

const Login = () => {
  const context = useContext(GlobalState)
  const history = useHistory()
  const [user, setUser] = useState({
    email:'', password: ''
  })

  const onInputChange = e =>{
      const {name, value} = e.target;
      setUser({...user, [name]:value})
  }

  const loginSubmit = async e =>{
    e.preventDefault();
    try {
      const res = await axios.post('/user/login', {...user})
      
      localStorage.setItem('firstLogin', true)
      console.log(res.data.accessToken);
      const [getToken, setToken] = context.token
      setToken(res.data.accessToken)
      history.push('/')
    } catch (err) {
      alert(err.response.data.msg)
    }
  }

  return(
  <div className='login-page'>
      <form onSubmit={loginSubmit}>
        <h2>Login</h2>
        <input type="email" name='email' required placeholder='Email' value={user.email} onChange={onInputChange}/>

        <input type="password" name='password' required autoComplete='on' placeholder='Password' value={user.password} onChange={onInputChange} />

        <div className="row">
          <button type='submit'>Login</button>
          <Link to='/register'>Register</Link>
        </div>
      </form>
  </div>
  ) 
};

export default Login;
