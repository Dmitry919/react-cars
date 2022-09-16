import React from 'react'
import styles from './Footer.module.css'
import logo from '../../images/logo2.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <img className={styles.img_logo} src={logo} alt="/" />
            <button>Share A Car</button>
        </div>
    </div>
  )
}

export default Footer