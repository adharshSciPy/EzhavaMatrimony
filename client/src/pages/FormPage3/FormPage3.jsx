import React, { useState } from "react";
import styles from "../FormPage1/formpage1.module.css";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";

function FormPage3() {
  const [selected, setSelected] = useState("");
  const [martial, setMarital] = useState("");
  const [family, setFamily] = useState("");
  const btnSelected = (button) => {
    setSelected(button);
    console.log("hhaiii", button);
  };
  //   const btnSelectedJathakam = (button) => {
  //     setSelectedJathakam(button);
  //   };
  const martialStatus = (button) => {
    setMarital(button);
    console.log("hai", button);
  };
  const familyStatus = (button) => {
    setFamily(button);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.progressDiv}>
        <div className={styles.progressHeading}>You have completed</div>
        <div className={styles.progressHeading2}>60%</div>
      </div>
      <div className={styles.container}>
        {/* Progress Bar */}

        {/* Main Content */}
        <div className={styles.contentDiv}>
          {/* Image Section */}

          <div className={styles.imageDisplayDiv}>
            <img
              src={image} // Replace with actual image URL
              alt="Couple"
              className={styles.image}
            />
          </div>

          {/* Form Section */}
          <div className={styles.formContainer}>
            <h3 className={styles.formHeading}>
              Tell us about your friends personal details
            </h3>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Maritial Status</label>
                    {/* <p className={styles.starHead}>*</p> */}
                  </div>
                  <div className={styles.inputGroupButtons}>
                    <div className={styles.optionButtonOuterDiv}>
                      <button
                        className={`${styles.optionSingleButton} ${
                          martial === "Married" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          martialStatus("Married");
                        }}
                      >
                        Married
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          martial === "Widowed" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          martialStatus("Widowed");
                        }}
                      >
                        Widowed
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          martial === "Divorced" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          martialStatus("Divorced");
                        }}
                      >
                        Divorced
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          martial === "Awaiting Divorce" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          martialStatus("Awaiting Divorce");
                        }}
                      >
                        Awaiting Divorce
                      </button>
                    </div>
                  </div>
                  {/* <div className={styles.helperTextDiv}></div> */}
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Height</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Height In Centimeters"
                    />
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Family Status</label>
                    {/* <p className={styles.starHead}>*</p> */}
                  </div>
                  <div className={styles.inputGroupButtons}>
                    <div className={styles.optionButtonOuterDiv}>
                      <button
                        className={`${styles.optionSingleButton} ${
                          family === "Middle Class" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          familyStatus("Middle Class");
                        }}
                      >
                        Middle Class
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          family === "Upper Middle Class" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          familyStatus("Upper Middle Class");
                        }}
                      >
                        Upper Middle Class
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          family === "High Class" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          setFamily("High Class");
                        }}
                      >
                        High Class
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          family === "Rich" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          martialStatus("Rich");
                        }}
                      >
                        Rich/Affluent
                      </button>
                    </div>
                  </div>
                  {/* <div className={styles.helperTextDiv}></div> */}
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Family NetWorth</label>
                  </div>
                  <div className={styles.inputGroup}>
                    <select className={styles.input}>
                      <option value="less_than_1M">Less than $1M</option>
                      <option value="1M_to_5M">$1M to $5M</option>
                      <option value="5M_to_10M">$5M to $10M</option>
                      <option value="10M_to_50M">$10M to $50M</option>
                      <option value="above_50M">Above $50M</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}>
                    <div className={styles.optionalDiv}>
                      <p className={styles.optionalDivText}>Optional</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Dosham</label>
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.optionButtonOuterDiv}>
                      <button
                        className={`${styles.optionSingleButton} ${
                          selected === "Yes" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          btnSelected("Yes");
                        }}
                      >
                        Yes
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          selected === "No" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          btnSelected("No");
                        }}
                      >
                        No
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          selected === "Don't Know" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          btnSelected("Don't Know");
                        }}
                      >
                        Don't Know
                      </button>
                    </div>
                  </div>
                  <div className={styles.helperTextDiv}>
                    <div className={styles.optionalDiv}>
                      <p className={styles.optionalDivText}>Optional</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.btnDiv}>
                <button type="submit" className={styles.submitButton}>
                  Continue
                </button>
              </div>
              <div className={styles.mandatoryField}>* Mandatory fields</div>
            </form>
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

export default FormPage3;
