import React from 'react'
//styles
import styles from './Navbar.module.css';

function Navbar({ logout }) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        ChaChaGram
      </div>
      <div className={styles.logout} onClick={logout}>Logout</div>
    </div>
  )
}

export default Navbar