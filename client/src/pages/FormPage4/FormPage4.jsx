import React from "react";
import  styles from "../FormPage1/formpage1.module.css"
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg"

function FormPage4 (){
return (
  <div className={styles.mainContainer}>
  <div className={styles.progressDiv}>
    <div className={styles.progressHeading}>You have completed</div>
    <div className={styles.progressHeading2}>90%</div>
  </div>
  
  <div className={styles.container}>
    {/* Progress Bar */}

    {/* Main Content */}
    <div className={styles.contentDiv}>
      {/* Image Section */}
      <div className={styles.imageDisplayDiv}>
        <img
          src={image}
          alt="Couple"
          className={styles.image}
        />
      </div>

      {/* Form Section */}
      <div className={styles.formContainer}>
        <h3 className={styles.formHeading}>About your Friend's life</h3>

        {/* New Div with Text Area */}
        <div className={styles.textAreaDiv}>
          <label className={styles.leftLabel}>About your friend</label>
          <textarea
            className={styles.textArea}
            placeholder="Type here..."
          ></textarea>
        </div>
        <form className={styles.form}>
                      <div className={styles.formGroup}>
                        <div className={styles.fieldGroup}>
                          <div className={styles.labelGroup}>
                            <label>Age</label>
                            <p className={styles.starHead}>*</p>
                          </div>
                          <div className={styles.inputGroup}>
                            <input
                              type="text"
                              className={styles.input}
                              placeholder=""
                            />
                          </div>
                          <div className={styles.helperTextDiv}></div>
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <div className={styles.fieldGroup}>
                          <div className={styles.labelGroup}>
                            <label>Hobbies</label>
                            <p className={styles.starHead}>*</p>
                          </div>
                          <div className={styles.inputGroup}>
                            <input
                              type="text"
                              className={styles.input}
                              placeholder=""
                            />
                          </div>
                          <div className={styles.helperTextDiv}></div>
                        </div>
                        
                      </div>
                      <div className={styles.formGroup}>
                        <div className={styles.fieldGroup}>
                          <div className={styles.labelGroup}>
                            <label>Location</label>
                            <p className={styles.starHead}>*</p>
                          </div>
                          <div className={styles.inputGroup}>
                            <input
                              type="text"
                              className={styles.input}
                              placeholder=""
                            />
                          </div>
                          <div className={styles.helperTextDiv}></div>
                        </div>
                        
                      </div>
        </form>

        

        <div className={styles.btnDiv}>
          <button type="submit" className={styles.submitButton}>
            Complete
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Footer */}
  <div className={styles.footer}>
    <p>Copyright © 2025. All rights reserved</p>
  </div>
</div>
  );
}
export default FormPage4