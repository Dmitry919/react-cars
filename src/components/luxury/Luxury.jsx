import React from 'react'
import styles from './Luxury.module.css'

const Luxury = () => {
  return (
    <div className={styles.luxury}>
        <div className={styles.heading}>
            <h2>Luxury Selection</h2>
            <div className={styles.text_bg}>
                <p>
                    <span>Select from top luxury vehicles to toll in style</span>
                </p>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1519245659620-e859806a8d3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />
                <div className={styles.content}>
                    <h3>Rolls Royce</h3>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1530906358829-e84b2769270f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="/" />
                <div className={styles.content}>
                    <h3>Rolls Royce</h3>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1544482570-c8a1e3e69273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
                <div className={styles.content}>
                    <h3>Rolls Royce</h3>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1547583171-e97550cac6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />
                <div className={styles.content}>
                    <h3>Rolls Royce</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Luxury