import React from 'react';
//firebase auth
import firebase from 'firebase/app';
import { Auth_Firbase } from '../../firebase';

//Icon 
import google from '../../assets/google.svg';
import chacha from '../../assets/4.jpg';
//Styles
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
      <div className={styles.chacha}>
          <img src={chacha} alt='' /> 
        </div>
        <h2> Welcome To ChaChaGram! </h2>
        <div className={styles.button}
        onClick={()=>Auth_Firbase.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <img src={google} alt='google' /> Sign in  With Google
        </div>
      </div>
    </div>
  )
}
