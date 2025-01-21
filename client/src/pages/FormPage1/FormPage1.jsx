import React from 'react'
import styles from './formpage1.module.css'

function FormPage1() {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.progressDiv}>
                <h4 className={styles.progressHeading}>You Have Completed 20%</h4>
            </div>
            <div className={styles.contentDiv}>
                <div className={styles.imageDisplayDiv}>
                    
                    <div className={styles.imagesDiv}>

                    </div>
                    <div className={styles.heartDisplay}>

                    </div>

                </div>
                <div className={styles.dataConatiner}>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormPage1