import React from 'react'
import styles from './Driver.module.css'

const driver = 'https://images.unsplash.com/photo-1626565244872-206f4c1f9e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaXZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={driver} alt="/" />
        </div>
        <div>
            <h2>
                Find your perfect car <span>to try before you buy</span>{' '}
            </h2>
            <p>
                Make sure your future wheels work well with your lifestyle by taking your time in the drivers seat.
            </p>
            <button>Browser Cars</button>
        </div>
    </div>
  )
}

export default Driver