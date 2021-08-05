import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import {login} from './features/userSlice';
import "./Login.css"
import { useDispatch } from 'react-redux';

function Login() {


  const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(({ user }) => {
       dispatch(login ({
         displayName : user.displayName,
         email:user.email,
         photoUrl: user.photoURL
       })) 

       
    })
    .catch(error => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg" alt="" />
        <Button onClick={signIn} className="btn" type="submit">Login</Button>
      </div>
    </div>
  )
}

export default Login
